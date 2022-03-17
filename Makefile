
build_auth_proto:
	@ protoc -I protobufs --go_out=./src/jokes/lib/proto --go-grpc_out=require_unimplemented_servers=false:./src/jokes/lib/proto protobufs/joke.proto
	# @ protoc -I protobufs --go_out=./src/authentication/lib/proto --go-grpc_out=require_unimplemented_servers=false:./src/authentication/lib/proto protobufs/todo.proto

protos:
	@echo "Building proto definitions"
	$(MAKE) build_auth_proto