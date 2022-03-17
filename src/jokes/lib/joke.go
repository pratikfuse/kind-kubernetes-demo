package lib

import (
	"bufio"
	"errors"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type DadJoke struct {
	Opener    string `json:"opener"`
	Punchline string `json:"punchline"`
}

var DadJokes []DadJoke

func LoadJokesFromFile() error {
	path, err := filepath.Abs("./jokes")
	DadJokes = []DadJoke{}
	if err != nil {
		return err
	}
	file, err := os.Open(path)

	defer func() {
		err := file.Close()
		if err != nil {
			log.Fatal("Error closing file")
		}
	}()

	if err != nil {
		return err
	}

	reader := bufio.NewReader(file)
	l, _, err := reader.ReadLine()

	for err != io.EOF {
		parts := strings.Split(string(l), "<>")

		DadJokes = append(DadJokes, DadJoke{
			Opener:    parts[0],
			Punchline: parts[1],
		})

		l, _, err = reader.ReadLine()

		if err != nil && err != io.EOF {
			return errors.New("error reading jokes file")
		}
	}

	return nil

}
