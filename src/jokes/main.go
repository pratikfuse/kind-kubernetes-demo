package main

import (
	"context"
	"google.golang.org/grpc"
	"joke/lib"
	"joke/lib/proto"
	"log"
	"net"
)

func main() {

	jokeFileError := lib.LoadJokesFromFile()

	if jokeFileError != nil {
		log.Fatal(jokeFileError)
	}

	listener, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatal(err)
	}

	signalCtx := SignalContext(context.Background())

	server := grpc.NewServer()

	proto.RegisterDadJokesServerServer(server, &lib.DadJokeServer{})

	go func() {
		if err := server.Serve(listener); err != nil {
			panic(err)
		}
	}()

	log.Println("Started authenticatin server", listener.Addr().String())

	<-signalCtx.Done()

	log.Println("Graceful shutdown initiated")

	server.GracefulStop()

	log.Println("Server shutdown successfully")
}
