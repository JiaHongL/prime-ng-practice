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
            label: 'ColorPicker 顏色選擇器',
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
            label: 'FloatLabel 浮動標籤',
            routerLink: '/form/float-label'
          },
          {
            label: 'InputGroup 輸入框群組',
            routerLink: '/form/input-group'
          },
          {
            label: 'InputMask 輸入框遮罩',
            routerLink: '/form/input-mask'
          },
          {
            label: 'InputSwitch 滑動選擇框',
            routerLink: '/form/input-switch'
          },
          {
            label: 'InputText 輸入框',
            routerLink: '/form/input-text'
          },
          {
            label: 'InputTextarea 多行輸入',
            routerLink: '/form/input-textarea'
          },
          {
            label: 'InputNumber 數字輸入框',
            routerLink: '/form/input-number'
          },
          {
            label: 'InvalidState 驗證無效狀態',
            routerLink: '/form/invalid-state'
          },
          {
            label: 'Knob 旋轉鈕',
            routerLink: '/form/knob'
          },
          {
            label: 'KeyFilter 輸入過濾',
            routerLink: '/form/key-filter'
          },
          {
            label: 'ListBox 列表框',
            routerLink: '/form/list-box'
          },
          {
            label: 'MultiSelect 多選',
            routerLink: '/form/multi-select'
          },
          {
            label: 'Password 密碼輸入框',
            routerLink: '/form/password'
          },
          {
            label: 'RadioButton 單選按鈕',
            routerLink: '/form/radio-button'
          },
          {
            label: 'Rating 評分',
            routerLink: '/form/rating'
          },
          {
            label: 'Slider 滑塊控件',
            routerLink: '/form/slider'
          },
          {
            label: 'SelectButton 選擇按鈕(群組按鈕)',
            routerLink: '/form/select-button'
          },
          {
            label: 'ToggleButton 切換按鈕',
            routerLink: '/form/toggle-button'
          },
          {
            label: 'TreeSelect 樹狀下拉選擇',
            routerLink: '/form/tree-select'
          },
          {
            label: 'TriStateCheckbox 三種狀態的複選',
            routerLink: '/form/tri-state-checkbox'
          },
        ]
      },
      {
        label: 'Button 按鈕',
        items: [
          {
            label: 'Button 按鈕',
            routerLink: '/button/button'
          },
          {
            label: 'SplitButton 分割按鈕(下拉式按鈕)',
            routerLink: '/button/split-button'
          },
          {
            label: 'Speed-Dial 快速點擊按鈕',
            routerLink: '/button/speed-dial'
          }
        ]
      },
      {
        label: 'Data 資料',
        routerLink: ''
      },
      {
        label: 'Panel 面板',
        routerLink: ''
      },
      {
        label: 'Overlay 遮罩',
        routerLink: ''
      },
      {
        label: 'File 檔案',
        routerLink: ''
      },
      {
        label: 'Menu 選單',
        routerLink: ''
      },
      {
        label: 'Chart 圖表',
        routerLink: ''
      },
      {
        label: 'Message 訊息',
        routerLink: ''
      },
      {
        label: 'Media 媒體',
        routerLink: ''
      },
      {
        label: 'Drag and Drop 拖放',
        routerLink: ''
      },
      {
        label: 'Misc 雜項',
        routerLink: ''
      },
      {
        label: 'Directive',
        routerLink: ''
      },
      {
        label: 'Utilities 實用類',
        routerLink: ''
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
