import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  counter: number = 0;
  oddArray: number[] = [];
  evenArray: number[] = [];

  interval;

  constructor() { }

  ngOnInit() {
  }

  incrementCounter(){
    this.counter++;
    (this.counter % 2 === 0) ? this.evenArray.push(this.counter) : this.oddArray.push(this.counter);
  }

  onStartGame(){
    this.interval = setInterval(() => this.incrementCounter(), 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

  onEndGame(){
    clearInterval(this.interval);
    this.counter = 0;
    this.oddArray = [];
    this.evenArray =[]
  }

}
