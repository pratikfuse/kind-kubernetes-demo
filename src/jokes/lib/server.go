package lib

import (
	"context"
	"joke/lib/proto"
	"math/rand"
	"time"
)

type DadJokeServer struct {
}

func (d DadJokeServer) Random(ctx context.Context, e *proto.Empty) (*proto.RandomResponse, error) {
	rand.Seed(time.Now().UnixNano())
	randomIndex := rand.Intn(len(DadJokes)-1) + 1
	dadJoke := DadJokes[randomIndex]

	return &proto.RandomResponse{
		Joke: &proto.DadJoke{
			Opener:    dadJoke.Opener,
			Punchline: dadJoke.Punchline,
		},
	}, nil

}
