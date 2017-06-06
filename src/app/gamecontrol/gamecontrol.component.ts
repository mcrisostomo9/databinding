import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  counter: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(() => this.counter++, 1000);
  }

  onEndGame(){
    clearInterval(this.interval);
  }

}
