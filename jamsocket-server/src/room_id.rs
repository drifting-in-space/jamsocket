use rand::distributions::Uniform;
use rand::{thread_rng, Rng};
use std::{
    fmt::{Debug, Display},
    str::FromStr,
};
use uuid::Uuid;

#[derive(Debug)]
struct ShortRoomIdGenerator(pub usize);

impl RoomIdGenerator for ShortRoomIdGenerator {
    fn generate(&self) -> String {
        thread_rng()
            .sample_iter(&Uniform::from('A'..'Z'))
            .map(|c| c as char)
            .take(self.0)
            .collect()
    }
}

/// Assigns a user ID from a UUID.
#[derive(Debug)]
pub struct UuidRoomIdGenerator;

impl RoomIdGenerator for UuidRoomIdGenerator {
    fn generate(&self) -> String {
        let my_uuid = Uuid::new_v4();
        my_uuid.to_string()
    }
}

/// Trait for objects capable of generating a user ID.
pub trait RoomIdGenerator: Debug {
    fn generate(&self) -> String;
}

/// Determines how new rooms are assigned an id.
#[derive(Debug)]
pub enum RoomIdStrategy {
    /// Rooms are created when they are first accessed.
    Implicit,
    /// Rooms are created with an explicit API call that provides an ID.
    Explicit,
    /// The server only has one room.
    Singleton,
    /// Room IDs are created by an endpoint, which returns an ID
    /// generated by the provided generator.
    Generator(Box<dyn RoomIdGenerator + Sync + Send>),
}

#[derive(Debug)]
pub struct BadGeneratorName(String);

impl Display for BadGeneratorName {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "Bad room ID generator '{}', expected one of {{singleton,short,uuid,api,implicit}}.",
            self.0
        )
    }
}

impl std::error::Error for BadGeneratorName {}

impl FromStr for RoomIdStrategy {
    type Err = BadGeneratorName;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "api" => Ok(RoomIdStrategy::Explicit),
            "implicit" => Ok(RoomIdStrategy::Implicit),
            "short" => Ok(RoomIdStrategy::Generator(Box::new(ShortRoomIdGenerator(4)))),
            "uuid" => Ok(RoomIdStrategy::Generator(Box::new(UuidRoomIdGenerator))),
            "singleton" => Ok(RoomIdStrategy::Singleton),
            _ if s.starts_with("short") => {
                if let Some(num) = s.strip_prefix("short") {
                    let n: usize = num.parse().map_err(|_| BadGeneratorName(s.to_string()))?;
                    Ok(RoomIdStrategy::Generator(Box::new(ShortRoomIdGenerator(n))))
                } else {
                    panic!() // Should never get here.
                }
            }
            _ => Err(BadGeneratorName(s.to_string())),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use matches::assert_matches;

    #[test]
    fn test_parse_room_id_strategy() {
        assert_matches!(
            RoomIdStrategy::from_str("api").unwrap(),
            RoomIdStrategy::Explicit
        );
        assert_matches!(
            RoomIdStrategy::from_str("implicit").unwrap(),
            RoomIdStrategy::Implicit
        );
        assert_matches!(
            RoomIdStrategy::from_str("short").unwrap(),
            RoomIdStrategy::Generator(_)
        );
        assert_matches!(
            RoomIdStrategy::from_str("short5").unwrap(),
            RoomIdStrategy::Generator(_)
        );
        assert_matches!(
            RoomIdStrategy::from_str("uuid").unwrap(),
            RoomIdStrategy::Generator(_)
        );
        assert_matches!(
            RoomIdStrategy::from_str("singleton").unwrap(),
            RoomIdStrategy::Singleton
        );
    }

    #[test]
    fn test_length() {
        if let RoomIdStrategy::Generator(g) = RoomIdStrategy::from_str("uuid").unwrap() {
            let result = g.generate();
            assert_eq!(36, result.len())
        } else {
            panic!("Expected RoomIdStrategy::Generator.")
        }

        if let RoomIdStrategy::Generator(g) = RoomIdStrategy::from_str("short6").unwrap() {
            let result = g.generate();
            assert_eq!(6, result.len())
        } else {
            panic!("Expected RoomIdStrategy::Generator.")
        }

        if let RoomIdStrategy::Generator(g) = RoomIdStrategy::from_str("short").unwrap() {
            let result = g.generate();
            assert_eq!(4, result.len())
        } else {
            panic!("Expected RoomIdStrategy::Generator.")
        }
    }
}
