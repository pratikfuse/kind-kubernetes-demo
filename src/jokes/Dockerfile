FROM golang:1.15 as proto_builder

# Install proto dependencies
WORKDIR /build/protos
RUN apt-get update
RUN apt-get install -y protobuf-compiler
COPY protobufs protobufs
RUN go get google.golang.org/protobuf/cmd/protoc-gen-go \
    google.golang.org/grpc/cmd/protoc-gen-go-grpc
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go \
    google.golang.org/grpc/cmd/protoc-gen-go-grpc
RUN protoc -I protobufs --go_out=/build/protos --go-grpc_out=require_unimplemented_servers=false:/build/protos protobufs/joke.proto

# Build go app with grpc dependencies
FROM golang:1.15 as builder
WORKDIR /build
# RUN go get github.com/golang/protobuf

COPY --from=proto_builder /build/protos /build/lib/protos/.

COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

# Run the authentication grpc server
FROM alpine:latest
WORKDIR /var/current
COPY --from=builder /build/app app
COPY jokes .
EXPOSE 9000
CMD ["./app"]