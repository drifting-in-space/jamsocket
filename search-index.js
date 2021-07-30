var searchIndex = JSON.parse('{\
"jamsocket":{"doc":"Jamsocket is a minimalist framework for developing …","t":[13,8,8,8,4,16,8,13,3,10,11,11,11,11,11,11,10,11,11,10,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,10,10,10,10,11,11,11,11,11,11,11,11,11,12],"n":["Broadcast","JamsocketContext","JamsocketService","JamsocketServiceFactory","MessageRecipient","Service","SimpleJamsocketService","User","WrappedJamsocketService","binary","binary","binary","borrow","borrow","borrow_mut","borrow_mut","build","clone","clone_into","connect","connect","connect","decode_u32","disconnect","disconnect","disconnect","encode_u32","eq","fmt","from","from","from","initialize","into","into","message","message","message","ne","send_binary","send_message","set_timer","timer","timer","timer","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","0"],"q":["jamsocket","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","jamsocket::MessageRecipient"],"d":["","Provides an interface for a JamsocketService instance to …","The main interface to a Jamsocket service.","Enables an object to become a JamsocketService of the …","Represents the recipient(s) of a message.","The type of JamsocketService that the object implementing …","A simplified interface for creating a JamsocketService …","","Combines a SimpleJamsocketService with an owned …","Called each time a client sends a binary message to the …","Called each time a client sends a binary message to the …","","","","","","Transform <code>self</code> into a JamsocketService.","","","Called each time a client connects to the service.","Called each time a client connects to the service.","","","Called each time a client disconnects from the service, …","Called each time a client disconnects from the service, …","","","","","","","","Called when the service is created, before any client has …","","","Called each time a client sends a text message to the …","Called each time a client sends a text message to the …","","","Sends a binary message to a currently connected user, or …","Sends a message to a currently connected user, or …","Sets a timer to wake up the service in the given number …","Called when JamsocketContext::set_timer has been called …","Called when JamsocketContext::set_timer has been called …","","","","","","","","",""],"i":[1,0,0,0,0,2,0,1,0,3,4,5,5,1,5,1,2,1,1,3,4,5,1,3,4,5,1,1,1,5,1,1,4,5,1,3,4,5,1,6,6,6,3,4,5,1,5,1,5,1,5,1,7],"f":[null,null,null,null,null,null,null,null,null,[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[["str",15]]],[[],["messagerecipient",4]],[[]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[],["u32",15]],[[["messagerecipient",4]],["bool",15]],[[["formatter",3]],["result",6]],[[]],[[]],[[["u32",15]]],[[["str",15]]],[[]],[[]],[[["str",15],["u32",15]]],[[["str",15],["u32",15]]],[[["str",15],["u32",15]]],[[["messagerecipient",4]],["bool",15]],[[]],[[["str",15]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null],"p":[[4,"MessageRecipient"],[8,"JamsocketServiceFactory"],[8,"JamsocketService"],[8,"SimpleJamsocketService"],[3,"WrappedJamsocketService"],[8,"JamsocketContext"],[13,"User"]]},\
"jamsocket_cli":{"doc":"<code>jamsocket-cli</code>: a command-line interface to Jamsocket","t":[0,5,0,3,13,3,4,13,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,5],"n":["cli_opts","main","serve","Opts","Serve","ServeCommand","SubCommand","Validate","ValidateCommand","augment_clap","augment_clap","augment_clap","augment_clap","augment_subcommands","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","debug","debug","debug","debug","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","from","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches","from_arg_matches","from_subcommand","heartbeat_interval","heartbeat_timeout","init","init","init","init","into","into","into","into","into_app","into_app","into_app","into_app","module","module","port","rooms","shutdown_policy","subcommand","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","0","0","serve"],"q":["jamsocket_cli","","","jamsocket_cli::cli_opts","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","jamsocket_cli::cli_opts::SubCommand","","jamsocket_cli::serve"],"d":["","","","","Run a dev server to host a given Jamsocket module.","","","Validate a given Jamsocket module.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The time interval (in seconds) between WebSocket …","The duration of time without hearing from a client before …","","","","","","","","","","","","","The module (.wasm file) to serve.","The module (.wasm file) to validate.","The port to serve on.","The strategy for assigning new room IDs.","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,1,0,0,1,0,2,1,3,4,1,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,1,3,3,2,1,3,4,2,1,3,4,2,1,3,4,3,4,3,3,3,2,2,1,3,4,2,1,3,4,2,1,3,4,2,1,3,4,5,6,0],"f":[null,[[],["result",6]],null,null,null,null,null,null,null,[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[["app",3]],["app",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[["argmatches",3]]],[[["argmatches",3]]],[[["argmatches",3]]],[[["argmatches",3]]],[[["option",4]],["option",4]],null,null,[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[]],[[]],[[],["app",3]],[[],["app",3]],[[],["app",3]],[[],["app",3]],null,null,null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]],[[]],null,null,[[["servecommand",3]],["result",6]]],"p":[[4,"SubCommand"],[3,"Opts"],[3,"ServeCommand"],[3,"ValidateCommand"],[13,"Serve"],[13,"Validate"]]},\
"jamsocket_server":{"doc":"","t":[13,3,3,13,13,13,13,13,13,13,4,3,13,3,8,4,3,4,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,12,12,12,12,11,12,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,12,12,12,12,12,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12],"n":["AfterSeconds","AssignUserId","ClientSocketConnection","Connect","Disconnect","Explicit","Generator","Immediate","Implicit","Message","MessageFromClient","MessageFromServer","Never","RoomActor","RoomIdGenerator","RoomIdStrategy","ServerSettings","ServiceShutdownPolicy","UuidRoomIdGenerator","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","data","default","do_serve","eq","explicit_room_creation_allowed","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from_str","from_str","generate","generate","handle","handle","handle","handle","handle","heartbeat_interval","heartbeat_interval","heartbeat_timeout","heartbeat_timeout","implicit_room_creation_allowed","interval_handle","into","into","into","into","into","into","into","into","into","ip","last_seen","ne","new","new","new_binary","port","room","room_id","room_id_strategy","shutdown_policy","started","to_owned","to_owned","to_owned","to_user","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_generator","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","user","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","0","0","1","data","from_user","0","0"],"q":["jamsocket_server","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","jamsocket_server::MessageFromClient","","","","","jamsocket_server::RoomIdStrategy","jamsocket_server::ServiceShutdownPolicy"],"d":["","Represents a request to reserve a user ID and return it. …","Represents a connection from a service to a client, which …","A client opens a connection to the server.","A client disconnects from the server (or their connection …","Rooms are created with an explicit API call that provides …","Room IDs are created by an endpoint, which returns an ID …","","Rooms are created when they are first accessed.","A client sends a message.","Represents a message or event initiated by a client.","Represents a message sent to one or more clients from the …","","Actor model representation of a “room”. A room is a …","Trait for objects capable of generating a user ID.","Determines how new rooms are assigned an id.","Settings used by the server.","","Assigns a user ID from a UUID.","","","","","","","","","","","","","","","","","","","","","","","","","","","Start a server given a cloneable [JamsocketServiceBuilder]…","","","","","","","","","","","","","","","","","","","","","","","","","","","The duration of time between server-initiated WebSocket …","","The minimum amount of time between client heartbeats …","","","","","","","","","","","","","","","","","","The port to run the server on.","","","The method by which new rooms are created and assigned …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,0,0,2,2,3,3,1,3,2,0,0,1,0,0,0,0,0,0,4,5,6,7,2,8,9,3,1,4,5,6,7,2,8,9,3,1,2,8,1,2,8,1,8,3,0,1,3,2,8,9,3,1,4,5,6,7,2,8,9,3,1,3,1,10,9,4,4,6,6,6,4,7,4,7,3,4,4,5,6,7,2,8,9,3,1,4,4,1,6,8,8,7,4,4,7,7,4,2,8,1,8,4,5,6,7,2,8,9,3,1,3,4,5,6,7,2,8,9,3,1,4,5,6,7,2,8,9,3,1,4,4,5,6,7,2,8,9,3,1,11,12,11,13,13,14,15],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["messagefromclient",4]],[[],["messagefromserver",3]],[[],["serviceshutdownpolicy",4]],[[]],[[]],[[]],null,[[]],[[["jamsocketservicefactory",8,["serviceactorcontext"]],["serviceactorcontext",3],["serversettings",3]],["result",6]],[[["serviceshutdownpolicy",4]],["bool",15]],[[],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],["result",4]],[[["str",15]],[["result",4,["badshutdownpolicyname"]],["badshutdownpolicyname",3]]],[[],["string",3]],[[],["string",3]],[[["messagefromserver",3]]],[[["message",4],["result",4,["message","protocolerror"]],["protocolerror",4]]],[[["messagefromserver",3],["context",3]]],[[["messagefromclient",4],["context",3]]],[[["assignuserid",3],["context",3]],["u32",15]],null,null,null,null,[[],["bool",15]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,[[["serviceshutdownpolicy",4]],["bool",15]],[[["messagefromclient",4],["recipient",3,["messagefromclient"]],["string",3],["serviceshutdownpolicy",4]]],[[["messagerecipient",4],["string",3]]],[[["messagerecipient",4],["u8",15],["vec",3,["u8"]]]],null,null,null,null,null,[[]],[[]],[[]],[[]],null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["option",4,["box"]],["box",3,["roomidgenerator"]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null],"p":[[4,"ServiceShutdownPolicy"],[4,"MessageFromClient"],[4,"RoomIdStrategy"],[3,"ClientSocketConnection"],[3,"AssignUserId"],[3,"RoomActor"],[3,"ServerSettings"],[3,"MessageFromServer"],[3,"UuidRoomIdGenerator"],[8,"RoomIdGenerator"],[13,"Connect"],[13,"Disconnect"],[13,"Message"],[13,"Generator"],[13,"AfterSeconds"]]},\
"jamsocket_wasm":{"doc":"","t":[23,0,13,8,8,8,4,16,8,13,3,10,11,11,11,11,11,11,10,11,11,10,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,23,10,11,11,11,10,10,10,10,11,11,11,11,11,11,11,11,11],"n":["jamsocket_wasm","prelude","Broadcast","JamsocketContext","JamsocketService","JamsocketServiceFactory","MessageRecipient","Service","SimpleJamsocketService","User","WrappedJamsocketService","binary","binary","binary","borrow","borrow","borrow_mut","borrow_mut","build","clone","clone_into","connect","connect","connect","decode_u32","disconnect","disconnect","disconnect","encode_u32","eq","fmt","from","from","from","initialize","into","into","jamsocket_wasm","message","message","message","ne","send_binary","send_message","set_timer","timer","timer","timer","to_owned","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["jamsocket_wasm","","jamsocket_wasm::prelude","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…","","","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","Re-exports useful items from <code>jamsocket</code> and …","The type of JamsocketService that the object implementing …","Re-exports useful items from <code>jamsocket</code> and …","","Re-exports useful items from <code>jamsocket</code> and …","Called each time a client sends a binary message to the …","Called each time a client sends a binary message to the …","","","","","","Transform <code>self</code> into a JamsocketService.","","","Called each time a client connects to the service.","Called each time a client connects to the service.","","","Called each time a client disconnects from the service, …","Called each time a client disconnects from the service, …","","","","","","","","Called when the service is created, before any client has …","","","Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…","Called each time a client sends a text message to the …","Called each time a client sends a text message to the …","","","Sends a binary message to a currently connected user, or …","Sends a message to a currently connected user, or …","Sets a timer to wake up the service in the given number …","Called when JamsocketContext::set_timer has been called …","Called when JamsocketContext::set_timer has been called …","","","","","","","",""],"i":[0,0,1,0,0,0,0,2,0,1,0,3,4,5,5,1,5,1,2,1,1,3,4,5,1,3,4,5,1,1,1,5,1,1,4,5,1,0,3,4,5,1,6,6,6,3,4,5,1,5,1,5,1,5,1],"f":[null,null,null,null,null,null,null,null,null,null,null,[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[["str",15]]],[[],["messagerecipient",4]],[[]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]],["messagerecipient",4]],[[["u32",15]]],[[["u32",15]]],[[["u32",15]]],[[],["u32",15]],[[["messagerecipient",4]],["bool",15]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[]],[[]],[[["u32",15]],["messagerecipient",4]],[[["str",15]]],[[]],[[]],null,[[["str",15],["u32",15]]],[[["str",15],["u32",15]]],[[["str",15],["u32",15]]],[[["messagerecipient",4]],["bool",15]],[[]],[[["str",15]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[4,"MessageRecipient"],[8,"JamsocketServiceFactory"],[8,"JamsocketService"],[8,"SimpleJamsocketService"],[3,"WrappedJamsocketService"],[8,"JamsocketContext"]]},\
"jamsocket_wasm_host":{"doc":"This module provides a jamsocket::JamsocketService …","t":[13,13,13,13,3,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["CouldNotImportGlobal","CouldNotImportMemory","InvalidApiVersion","InvalidProtocolVersion","WasmHost","WasmHostFactory","WasmRuntimeError","binary","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","clone","clone_into","connect","debug","debug","debug","deref","deref","deref","deref_mut","deref_mut","deref_mut","description","disconnect","drop","drop","drop","fmt","fmt","from","from","from","init","init","init","into","into","into","message","new","new","timer","to_owned","to_string","try_binary","try_from","try_from","try_from","try_into","try_into","try_into","try_message","type_id","type_id","type_id","vzip","vzip","vzip"],"q":["jamsocket_wasm_host","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","Hosts a jamsocket::JamsocketService implemented by a …","Loads and caches a WebAssembly module such that a WasmHost…","An error encountered while running WebAssembly.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,1,1,1,0,0,0,2,2,3,1,2,3,1,3,3,3,2,2,3,1,2,3,1,2,3,1,1,2,2,3,1,1,1,2,3,1,2,3,1,2,3,1,2,2,3,2,3,1,2,2,3,1,2,3,1,2,2,3,1,2,3,1],"f":[null,null,null,null,null,null,null,[[["u32",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]]],[[],["wasmhostfactory",3]],[[]],[[["u32",15]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[],["str",15]],[[["u32",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[]],[[["str",15],["u32",15]]],[[["engine",3],["arc",3],["str",15],["module",3]],["result",6]],[[["str",15]]],[[]],[[]],[[],["string",3]],[[["u32",15]],["result",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["str",15],["u32",15]],["result",6]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]]],"p":[[4,"WasmRuntimeError"],[3,"WasmHost"],[3,"WasmHostFactory"]]},\
"jamsocket_wasm_macro":{"doc":"","t":[23],"n":["jamsocket_wasm"],"q":["jamsocket_wasm_macro"],"d":["Exposes a <code>jamsocket_wasm::SimpleJamsocketService</code>…"],"i":[0],"f":[null],"p":[]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};