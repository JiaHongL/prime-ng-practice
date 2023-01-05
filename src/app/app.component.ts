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
        routerLink: '/icon'
      },
      {
        label: 'Form 表單',
        items: [
          {
            label: 'AutoComplete 自動完成',
            routerLink: '/form/auto-complete'
          }, 
          {
            label: 'Calendar 日曆',
            routerLink: '/form/calendar'
          },
          {
            label: 'CascadeSelect 多階層選擇',
            routerLink: '/form/cascade-select'
          },
          {
            label: 'Checkbox 複選框',
            routerLink: '/form/checkbox'
          },
          {
            label: 'Chips 輸入多值的圓框',
            routerLink: '/form/chips'
          },
          {
            label: 'Color-picker 顏色選擇器',
            routerLink: '/form/color-picker'
          },
          {
            label: 'Dropdown 下拉選單',
            routerLink: '/form/dropdown'
          },
          {
            label: 'Editor 編輯',
            routerLink: '/form/editor'
          },
          {
            label: 'Float-label 浮動標籤',
            routerLink: '/form/float-label'
          },

        ]
      },
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      }
    ];
  }

}
