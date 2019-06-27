import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  constructor() { }

  ngOnInit() {
  }

  startTraining(){
    this.ongoingTraining = true;
    console.log(this.ongoingTraining);
  }

  stopTraining(){
    this.ongoingTraining = false;
    console.log(this.ongoingTraining);
  }

}
