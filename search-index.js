var searchIndex = JSON.parse('{\
"jamsocket":{"doc":"<code>jamsocket-cli</code>: a command-line interface to Jamsocket","t":[5],"n":["main"],"q":["jamsocket"],"d":[""],"i":[0],"f":[[[],["result",6]]],"p":[]},\
"jamsocket_cli":{"doc":"","t":[0,5,5,13,3,13,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,12,11,11,11,12,12,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,12],"n":["cli_opts","dev","serve","Dev","Opts","Serve","ServeCommand","SubCommand","augment_clap","augment_clap","augment_clap","augment_subcommands","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","debug","debug","debug","deref","deref","deref","deref_mut","deref_mut","deref_mut","drop","drop","drop","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches","from_subcommand","get_fd_flags","get_fd_flags","get_fd_flags","heartbeat_interval","heartbeat_timeout","init","init","init","into","into","into","into_app","into_app","into_app","module","new_set_fd_flags","new_set_fd_flags","new_set_fd_flags","port","rooms","set_fd_flags","set_fd_flags","set_fd_flags","shutdown_policy","subcommand","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vzip","vzip","vzip","0"],"q":["jamsocket_cli","","","jamsocket_cli::cli_opts","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","jamsocket_cli::cli_opts::SubCommand"],"d":["","","","","","Run a dev server to host a given Jamsocket module.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The time interval (in seconds) between WebSocket …","The duration of time without hearing from a client before …","","","","","","","","","","The module (.wasm file) to serve.","","","","The port to serve on.","The strategy for assigning new room IDs.","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,1,0,1,0,0,2,1,3,1,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,1,2,1,3,3,3,2,1,3,2,1,3,2,1,3,3,2,1,3,3,3,2,1,3,3,2,2,1,3,2,1,3,2,1,3,2,1,3,4],"f":[null,[[],["result",6]],[[["servecommand",3]],["result",6]],null,null,null,null,null,[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[["argmatches",3]]],[[["argmatches",3]]],[[["argmatches",3]]],[[["option",4]],["option",4]],[[],[["result",4,["fdflags","error"]],["fdflags",3],["error",3]]],[[],[["result",4,["fdflags","error"]],["fdflags",3],["error",3]]],[[],[["result",4,["fdflags","error"]],["fdflags",3],["error",3]]],null,null,[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[]],[[],["app",3]],[[],["app",3]],[[],["app",3]],null,[[["fdflags",3]],[["result",4,["setfdflags","error"]],["setfdflags",3],["error",3]]],[[["fdflags",3]],[["result",4,["setfdflags","error"]],["setfdflags",3],["error",3]]],[[["fdflags",3]],[["result",4,["setfdflags","error"]],["setfdflags",3],["error",3]]],null,null,[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]],null],"p":[[4,"SubCommand"],[3,"Opts"],[3,"ServeCommand"],[13,"Serve"]]},\
"jamsocket_server":{"doc":"","t":[12,13,3,3,13,13,13,13,13,13,13,4,3,13,3,8,4,3,3,4,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,12,12,12,12,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,11,12,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12],"n":["0","AfterSeconds","AssignClientId","ClientSocketConnection","Connect","Disconnect","Explicit","Generator","Immediate","Implicit","Message","MessageFromClient","MessageFromServer","Never","RoomActor","RoomIdGenerator","RoomIdStrategy","Server","ServiceActorContext","ServiceShutdownPolicy","ShortRoomIdGenerator","ShortRoomIdGeneratorFactory","UuidRoomIdGenerator","UuidRoomIdGeneratorFactory","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","client_id","client_path","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","data","default","default","default","deserialize","deserialize","eq","explicit_room_creation_allowed","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from_str","from_str","generate","generate","generate","handle","handle","handle","handle","handle","heartbeat_interval","heartbeat_interval","heartbeat_timeout","heartbeat_timeout","implicit_room_creation_allowed","interval_handle","into","into","into","into","into","into","into","into","into","into","into","into","into","ip","last_seen","ne","new","new","new","new","new","new_binary","port","room","room_id","room_id_strategy","send_binary","send_message","serve","serve_default","set_timer","shutdown_policy","started","static_path","to_client","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_generator","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","with_client_path","with_heartbeat_interval","with_heartbeat_timeout","with_port","with_room_id_strategy","with_shutdown_policy","with_static_path","0","0","1","data","from_client","0","0"],"q":["jamsocket_server","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","jamsocket_server::MessageFromClient","","","","","jamsocket_server::RoomIdStrategy","jamsocket_server::ServiceShutdownPolicy"],"d":["","Delete empty rooms if they stay empty for the given …","Represents a request to reserve a client ID and return …","Represents a connection from a service to a client, which …","A client opens a connection to the server.","A client disconnects from the server (or their connection …","Rooms are created with an explicit API call that provides …","Room IDs are created by an endpoint, which returns an ID …","Immediately delete rooms when they become empty.","Rooms are created when they are first accessed.","A client sends a message.","Represents a message or event initiated by a client.","Represents a message sent to one or more clients from the …","Never garbage collect rooms. This is mostly for …","Actor model representation of a “room”. A room is a …","Trait for objects capable of generating a user ID.","Determines how new rooms are assigned an id.","Settings used by the server.","A JamsocketContext implementation for JamsocketServices …","Determines how a server will behave when a room is empty …","Generates short, upper-case alphabetical IDs of a given …","Factory for creating a [ShortRoomIdGenerator].","Assigns a user ID from a UUID.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A local filesystem path to serve from /client, or None …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The duration of time between server-initiated WebSocket …","","The minimum amount of time between client heartbeats …","","","","","","","","","","","","","","","","","","","","","","Construct a ShortRoomIdGenerator for the given length.","","","The port to run the server on. Defaults to 8080.","","","The method by which new rooms are created and assigned …","","","Start a server given a cloneable [JamsocketServiceBuilder]…","","","How the server decides to shut down a room once it is …","","A local filesystem path to serve static files from, or …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,2,0,0,3,3,4,4,2,4,3,0,0,2,0,0,0,0,0,0,0,0,0,0,5,6,7,8,3,9,10,1,11,12,4,13,2,5,6,7,8,3,9,10,1,11,12,4,13,2,5,8,3,9,13,2,3,9,13,2,9,8,4,2,4,2,2,4,3,9,10,1,11,12,4,2,5,6,7,8,3,9,10,1,11,12,4,13,2,4,2,14,10,12,5,5,7,7,7,5,8,5,8,4,5,5,6,7,8,3,9,10,1,11,12,4,13,2,5,5,2,7,8,9,10,1,9,8,5,5,8,13,13,8,8,13,8,5,8,9,3,9,13,2,5,6,7,8,3,9,10,1,11,12,4,13,2,4,5,6,7,8,3,9,10,1,11,12,4,13,2,5,6,7,8,3,9,10,1,11,12,4,13,2,5,6,7,8,3,9,10,1,11,12,4,13,2,8,8,8,8,8,8,8,15,16,15,17,17,18,19],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,[[],["messagefromclient",4]],[[],["messagefromserver",3]],[[],["serviceactorcontext",3]],[[],["serviceshutdownpolicy",4]],[[]],[[]],[[]],[[]],null,[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[["serviceshutdownpolicy",4]],["bool",15]],[[],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],["result",4]],[[["str",15]],[["badshutdownpolicyname",3],["result",4,["badshutdownpolicyname"]]]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[["message",4],["result",4,["message","protocolerror"]],["protocolerror",4]]],[[["messagefromserver",3]]],[[["context",3],["messagefromserver",3]]],[[["messagefromclient",4],["context",3]]],[[["assignclientid",3],["context",3]],["clientid",3]],null,null,null,null,[[],["bool",15]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,[[["serviceshutdownpolicy",4]],["bool",15]],[[["messagefromclient",4],["string",3],["serviceshutdownpolicy",4],["recipient",3,["messagefromclient"]]]],[[]],[[["messagerecipient",4],["string",3]]],[[["u32",15]]],[[["u32",15]]],[[["messagerecipient",4],["u8",15],["vec",3,["u8"]]]],null,null,null,null,[[]],[[["str",15]]],[[["serviceactorcontext",3],["jamsocketservicefactory",8,["serviceactorcontext"]]],["result",6]],[[],["result",6]],[[["u32",15]]],null,[[]],null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["box",3,["roomidgenerator"]],["option",4,["box"]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["option",4,["string"]],["string",3]]],[[["u64",15]]],[[["u64",15]]],[[["u32",15]]],[[["roomidstrategy",4]]],[[["serviceshutdownpolicy",4]]],[[["option",4,["string"]],["string",3]]],null,null,null,null,null,null,null],"p":[[3,"ShortRoomIdGeneratorFactory"],[4,"ServiceShutdownPolicy"],[4,"MessageFromClient"],[4,"RoomIdStrategy"],[3,"ClientSocketConnection"],[3,"AssignClientId"],[3,"RoomActor"],[3,"Server"],[3,"MessageFromServer"],[3,"ShortRoomIdGenerator"],[3,"UuidRoomIdGeneratorFactory"],[3,"UuidRoomIdGenerator"],[3,"ServiceActorContext"],[8,"RoomIdGenerator"],[13,"Connect"],[13,"Disconnect"],[13,"Message"],[13,"Generator"],[13,"AfterSeconds"]]},\
"jamsocket_wasm":{"doc":"","t":[23,0,13,13,3,8,8,8,4,16,8,3,10,11,11,11,11,11,11,11,11,10,11,11,11,11,10,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,23,10,11,11,11,11,10,11,11,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["jamsocket_wasm","prelude","Broadcast","Client","ClientId","JamsocketContext","JamsocketService","JamsocketServiceFactory","MessageRecipient","Service","SimpleJamsocketService","WrappedJamsocketService","binary","binary","binary","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","clone","clone","clone_into","clone_into","connect","connect","connect","decode_u32","disconnect","disconnect","disconnect","encode_u32","eq","eq","fmt","fmt","from","from","from","from","from","hash","into","into","into","jamsocket_wasm","message","message","message","ne","ne","new","new","partial_cmp","send_binary","send_message","set_timer","timer","timer","timer","to_owned","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id"],"q":["jamsocket_wasm","","jamsocket_wasm::prelude","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…","","","","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","The type of JamsocketService that the object implementing …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Called each time a client sends a binary message to the …","Called each time a client sends a binary message to the …","","","","","","","","Non-destructively build a JamsocketService from <code>self</code>.","","","","","Called each time a client connects to the service.","Called each time a client connects to the service.","","","Called each time a client disconnects from the service, …","Called each time a client disconnects from the service, …","","","","","","","","","","","","","","","","Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…","Called each time a client sends a text message to the …","Called each time a client sends a text message to the …","","","","Called when the service is created, before any client has …","","","Sends a binary message to a currently connected user, or …","Sends a message to a currently connected user, or …","Sets a timer to wake up the service in the given number …","Called when JamsocketContext::set_timer has been called …","Called when JamsocketContext::set_timer has been called …","","","","","","","","","","","",""],"i":[0,0,1,1,0,0,0,0,0,2,0,0,3,4,5,5,6,1,5,6,1,2,6,1,6,1,3,4,5,1,3,4,5,1,6,1,6,1,5,6,6,1,1,6,5,6,1,0,3,4,5,6,1,4,5,6,7,7,7,3,4,5,6,1,5,6,1,5,6,1,5,6,1],"f":[null,null,null,null,null,null,null,null,null,null,null,null,[[["clientid",3]]],[[["clientid",3]]],[[["clientid",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],["option",4]],[[],["clientid",3]],[[],["messagerecipient",4]],[[]],[[]],[[["clientid",3]]],[[["clientid",3]]],[[["clientid",3]]],[[["u32",15]],["messagerecipient",4]],[[["clientid",3]]],[[["clientid",3]]],[[["clientid",3]]],[[],["u32",15]],[[["clientid",3]],["bool",15]],[[["messagerecipient",4]],["bool",15]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[]],[[]],[[["u32",15]],["clientid",3]],[[]],[[["clientid",3]],["messagerecipient",4]],[[]],[[]],[[]],[[]],null,[[["clientid",3],["str",15]]],[[["clientid",3],["str",15]]],[[["clientid",3],["str",15]]],[[["clientid",3]],["bool",15]],[[["messagerecipient",4]],["bool",15]],[[["str",15]]],[[],["wrappedjamsocketservice",3]],[[["clientid",3]],[["option",4,["ordering"]],["ordering",4]]],[[]],[[["str",15]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[4,"MessageRecipient"],[8,"JamsocketServiceFactory"],[8,"JamsocketService"],[8,"SimpleJamsocketService"],[3,"WrappedJamsocketService"],[3,"ClientId"],[8,"JamsocketContext"]]},\
"jamsocket_wasm_host":{"doc":"This module provides a jamsocket::JamsocketService …","t":[13,13,13,13,3,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["CouldNotImportGlobal","CouldNotImportMemory","InvalidApiVersion","InvalidProtocolVersion","WasmHost","WasmHostFactory","WasmRuntimeError","binary","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","clone","clone_into","connect","debug","debug","debug","deref","deref","deref","deref_mut","deref_mut","deref_mut","description","disconnect","drop","drop","drop","fmt","fmt","from","from","from","get_fd_flags","get_fd_flags","get_fd_flags","init","init","init","into","into","into","message","new","new","new_set_fd_flags","new_set_fd_flags","new_set_fd_flags","set_fd_flags","set_fd_flags","set_fd_flags","timer","to_owned","to_string","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vzip","vzip","vzip"],"q":["jamsocket_wasm_host","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","Hosts a jamsocket::JamsocketService implemented by a …","Loads and caches a WebAssembly module such that a WasmHost…","An error encountered while running WebAssembly.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,1,1,1,0,0,0,2,2,3,1,2,3,1,3,3,3,2,2,3,1,2,3,1,2,3,1,1,2,2,3,1,1,1,2,3,1,2,3,1,2,3,1,2,3,1,2,2,3,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1],"f":[null,null,null,null,null,null,null,[[["clientid",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],["option",4]],[[],["wasmhostfactory",3]],[[]],[[["clientid",3]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["formatter",3]],[["error",3],["result",4,["error"]]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[],["str",15]],[[["clientid",3]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],[["error",3],["fdflags",3],["result",4,["fdflags","error"]]]],[[],[["error",3],["fdflags",3],["result",4,["fdflags","error"]]]],[[],[["error",3],["fdflags",3],["result",4,["fdflags","error"]]]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[]],[[["str",15],["clientid",3]]],[[["module",3],["str",15],["engine",3],["arc",3]],["result",6]],[[],["result",6]],[[["fdflags",3]],[["setfdflags",3],["error",3],["result",4,["setfdflags","error"]]]],[[["fdflags",3]],[["setfdflags",3],["error",3],["result",4,["setfdflags","error"]]]],[[["fdflags",3]],[["setfdflags",3],["error",3],["result",4,["setfdflags","error"]]]],[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],[[["setfdflags",3]],[["error",3],["result",4,["error"]]]],[[]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]]],"p":[[4,"WasmRuntimeError"],[3,"WasmHost"],[3,"WasmHostFactory"]]},\
"jamsocket_wasm_macro":{"doc":"","t":[23],"n":["jamsocket_wasm"],"q":["jamsocket_wasm_macro"],"d":["Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…"],"i":[0],"f":[null],"p":[]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};