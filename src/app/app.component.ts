import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
        {
          label: 'Icons 圖示',
          routerLink:'/icon'
        },
        {
          label: 'Form',
          items: [{
            label: 'AutoComplete',
            routerLink:'/form/auto-complete'
          }]
        },
        {
            label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        }
    ];
}

}
