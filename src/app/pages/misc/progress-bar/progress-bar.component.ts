import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  providers: [MessageService]
})
export class ProgressBarComponent implements OnInit {

  value: number = 0;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 1) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
        clearInterval(interval);
      }
    }, 2000);
  }

}
