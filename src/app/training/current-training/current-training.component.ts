import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output()
  trainingStop = new EventEmitter<void>();
  progress = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      }
      else {
        this.trainingStop.emit();
      }

    }, 100);
  }

  onStopTraining(){
    this.trainingStop.emit();
  }

}
