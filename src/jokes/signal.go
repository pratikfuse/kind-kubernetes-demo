package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
)

func SignalContext(ctx context.Context) context.Context {
	ctx, cancel := context.WithCancel(ctx)

	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		log.Println("listening for shutdown signal")
		<-sigs
		log.Println("shutdown signal received")
		signal.Stop(sigs)
		close(sigs)
		cancel()
	}()

	return ctx
}
