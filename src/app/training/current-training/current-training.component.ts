import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output()
  trainingStop = new EventEmitter<void>();
  progress = 0;
  timer;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.executeTimer();
  }

  executeTimer() {
    this.timer = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 5;
      }
      else {
        this.trainingStop.emit();
      }

    }, 1000);
  }

  onStopTraining() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingStop.emit();
      }
      else {
      this.executeTimer();
      }
    });
  }

}
