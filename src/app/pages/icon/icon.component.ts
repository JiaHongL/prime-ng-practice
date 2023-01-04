import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: PrimeIcons.PLUS },
        { label: 'Open', icon: PrimeIcons.DOWNLOAD }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: PrimeIcons.REFRESH },
        { label: 'Redo', icon: PrimeIcons.REPLAY }
      ]
    }];
  }

}
