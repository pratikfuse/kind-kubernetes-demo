import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  faceBarClass: string = "";
  joke: any;
  constructor(
    private jokeService: JokeService
  ) { }

  @HostListener('window:keyup', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    if (event.code === "Space") {
      this.fetchDadJoke();
    }
  }

  fetchDadJoke() {
    this.jokeService.fetchJoke().then(({ joke }) => {
      this.joke = joke;
    }).finally(() => {
      this.faceBarClass = "open";
      setTimeout(() => {
        this.faceBarClass = "";
      }, 2000)
    })
  }

  ngOnInit(): void {
    this.fetchDadJoke();
  }

}
