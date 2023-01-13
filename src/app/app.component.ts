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
        items: [
          {
            label: 'Data-View 數據顯示',
            routerLink: '/data/data-view'
          },
          {
            label: 'FullCalendar 行事曆',
            routerLink: '/data/full-calendar'
          },
          {
            label: 'G-Map google 地圖',
            routerLink: '/data/g-map'
          },
          {
            label: 'Order-List 排序清單',
            routerLink: '/data/order-list'
          },
          {
            label: 'Org-Chart 組織圖',
            routerLink: '/data/org-chart'
          },
          {
            label: 'Paginator 分頁器',
            routerLink: '/data/paginator'
          },
          {
            label: 'Pick-List 選取清單 (可拖曳)',
            routerLink: '/data/pick-list'
          },
          {
            label: 'Table 表格',
            items: [
              {
                label: 'Documentation 文件',
                routerLink: '/data/table/documentation'
              },
              {
                label: 'Basic 基本',
                routerLink: '/data/table/basic'
              },
              {
                label: 'Dynamic 動態',
                routerLink: '/data/table/dynamic'
              },
              {
                label: 'Templating 樣板',
                routerLink: '/data/table/templating'
              },
              {
                label: 'Size 大小',
                routerLink: '/data/table/size'
              },
              {
                label: 'Gridlines 網格線(cell)',
                routerLink: '/data/table/gridlines'
              },
              {
                label: 'Striped 條紋',
                routerLink: '/data/table/striped'
              },
              {
                label: 'ColGroup 欄位群組',
                routerLink: '/data/table/colGroup'
              },
              {
                label: 'Page 分頁',
                routerLink: '/data/table/page'
              },
              {
                label: 'Sort 排序',
                routerLink: '/data/table/sort'
              },
              {
                label: 'Filter 過濾',
                routerLink: '/data/table/filter'
              },
              {
                label: 'Selection 選取',
                routerLink: '/data/table/selection'
              },
              {
                label: 'Lazy 延遲載入',
                routerLink: '/data/table/lazy'
              },
              {
                label: 'Scroll 滾軸',
                routerLink: '/data/table/scroll'
              },
              {
                label: 'VirtualScroll 虛擬滾軸',
                routerLink: '/data/table/virtual-scroll'
              },
              {
                label: 'FlexScroll 自適大小',
                routerLink: '/data/table/flex-scroll'
              },
              {
                label: 'RowExpand 列的展開',
                routerLink: '/data/table/row-expand'
              },
              {
                label: 'Edit 可編輯',
                routerLink: '/data/table/edit'
              },
              {
                label: 'Toggle 欄位顯示切換',
                routerLink: '/data/table/toggle'
              },
              {
                label: 'Resize 拖拉調整欄位寬度',
                routerLink: '/data/table/resize'
              },
              {
                label: 'Reorder 重新排序',
                routerLink: '/data/table/reorder'
              },
              {
                label: 'RowGroup 列的群組',
                routerLink: '/data/table/row-group'
              },
              {
                label: 'ContextMenu 右鍵選單',
                routerLink: '/data/table/context-menu'
              },
              {
                label: 'Responsive 響應式',
                routerLink: '/data/table/responsive'
              },
              {
                label: 'Export 匯出',
                routerLink: '/data/table/export'
              },
              {
                label: 'State 狀態',
                routerLink: '/data/table/state'
              },
              {
                label: 'Style 樣式',
                routerLink: '/data/table/style'
              },
              {
                label: 'Sticky 貼上固定',
                routerLink: '/data/table/sticky'
              },
              {
                label: 'CRUD 新增/讀取/修改/刪除',
                routerLink: '/data/table/crud'
              }
            ]
          },
          {
            label: 'TimeLine 時間軸',
            routerLink: '/data/time-line'
          },
          {
            label: 'Tree 樹狀',
            items: [
              {
                label: 'Documentation 文件',
                routerLink: '/data/tree/documentation'
              },
              {
                label: 'Templating 樣板化',
                routerLink: '/data/tree/templating'
              },
              {
                label: 'Selection 選取',
                routerLink: '/data/tree/selection'
              },
              {
                label: 'Filter 過濾',
                routerLink: '/data/tree/filter'
              },
              {
                label: 'Lazy 延遲',
                routerLink: '/data/tree/lazy'
              },
              {
                label: 'Scroll 滾軸',
                routerLink: '/data/tree/scroll'
              },
              {
                label: 'ContextMenu 右鍵選單',
                routerLink: '/data/tree/context-menu'
              },
              {
                label: 'DragDrop 拖放',
                routerLink: '/data/tree/drag-drop'
              },
              {
                label: 'Horizontal 水平',
                routerLink: '/data/tree/horizontal'
              }
            ]
          },
          {
            label: 'Tree-Table 樹狀表單',
            items: [
              {
                label: 'Documentation 文件',
                routerLink: '/data/tree-table/documentation'
              },
              {
                label: 'templating 樣板化',
                routerLink: '/data/tree-table/templating'
              },
              {
                label: 'Page 分頁',
                routerLink: '/data/tree-table/page'
              },
              {
                label: 'Sort 排序',
                routerLink: '/data/tree-table/sort'
              },
              {
                label: 'Selection 選取',
                routerLink: '/data/tree-table/selection'
              },
              {
                label: 'ColGroup 欄位群組',
                routerLink: '/data/tree-table/col-group'
              },
              {
                label: 'Lazy 延遲',
                routerLink: '/data/tree-table/lazy'
              },
              {
                label: 'Edit 編輯',
                routerLink: '/data/tree-table/edit'
              },
              {
                label: 'Scroll 滾軸',
                routerLink: '/data/tree-table/scroll'
              },
              {
                label: 'Resize 調整大小',
                routerLink: '/data/tree-table/resize'
              },
              {
                label: 'Reorder 重新排序',
                routerLink: '/data/tree-table/reorder'
              },
              {
                label: 'Toggle 切換',
                routerLink: '/data/tree-table/toggle'
              },
              {
                label: 'Style 樣式',
                routerLink: '/data/tree-table/style'
              },
              {
                label: 'ContextMenu 右鍵選單',
                routerLink: '/data/tree-table/context-menu'
              },
              {
                label: 'Responsive 響應式',
                routerLink: '/data/tree-table/responsive'
              },
              {
                label: 'Filter 過濾',
                routerLink: '/data/tree-table/filter'
              },
              {
                label: 'Size 大小',
                routerLink: '/data/tree-table/size'
              }
            ]
          },
          {
            label: 'VirtualScroll 虛擬滾軸',
            routerLink: '/data/virtual-scroller'
          },
        ]
      },
      {
        label: 'Panel 面板',
        items: [
          {
            label: 'Accordion 手風琴',
            routerLink: '/panel/accordion'
          },
          {
            label: 'Card 卡片',
            routerLink: '/panel/card'
          },
          {
            label: 'Divider 分割器',
            routerLink: '/panel/divider'
          },
          {
            label: 'Fieldset 欄位分組器',
            routerLink: '/panel/fieldset'
          },
          {
            label: 'Panel 面板',
            routerLink: '/panel/panel'
          },
          {
            label: 'Splitter 分配器',
            routerLink: '/panel/splitter'
          },
          {
            label: 'ScrollPanel 滾動面板',
            routerLink: '/panel/scroll-panel'
          },
          {
            label: 'TabView 索引標籤檢視',
            routerLink: '/panel/tab-view'
          },
          {
            label: 'Toolbar 工具欄',
            routerLink: '/panel/toolbar'
          }
        ]
      },
      {
        label: 'Overlay 覆蓋',
        items: [
          {
            label: 'ConfirmDialog 確認視窗',
            routerLink: '/overly/confirm-dialog'
          },
          {
            label: 'ConfirmPopup 確認視窗(相對於某個 target)',
            routerLink: '/overly/confirm-popup'
          },
          {
            label: 'Dialog 視窗',
            routerLink: '/overly/dialog'
          },
          {
            label: 'DynamicDialog 動態視窗',
            routerLink: '/overly/dynamic-dialog'
          },
          {
            label: 'OverlayPanel覆蓋面板',
            routerLink: '/overly/overlay-panel'
          },
          {
            label: 'Sidebar 側欄',
            routerLink: '/overly/sidebar'
          },
          {
            label: 'Tooltip 工具提示',
            routerLink: '/overly/tooltip'
          }
        ]
      },
      {
        label: 'File 檔案',
        items:[{
          label:'FileUpload 檔案上傳',
          routerLink:'file/file-upload'
        }]
      },
      {
        label: 'Menu 選單',
        routerLink: '',
        items:[
          { 
            label: 'MenuModel 選單的資料模型',
            routerLink:'menu/menu-model'
          },
          { 
            label: 'Breadcrumb 麵包屑',
            routerLink:'menu/breadcrumb'
          },
          { 
            label: 'ContextMenu 右鍵選單',
            routerLink:'menu/context-menu'
          },
          { 
            label: 'Dock (類似 mac os 的 dock menu)',
            routerLink:'menu/dock'
          },
          { 
            label: 'MegaMenu 大型選單 (會連 submenu 一起顯示)',
            routerLink:'menu/mega-menu'
          },
          { 
            label: 'Menu 選單 (可使用 appendTo 做成按鈕選單)',
            routerLink:'menu/menu'
          },
          { 
            label: 'Menubar 選單欄 (水平)',
            routerLink:'menu/menubar'
          },
          { 
            label: 'PanelMenu 收合選單',
            routerLink:'menu/panel-menu'
          },
          { 
            label: 'SlideMenu 滑動選單(一直點進去)',
            routerLink:'menu/slide-menu'
          },
          { 
            label: 'Steps 步驟選單',
            routerLink:'menu/steps'
          },
          { 
            label: 'TabMenu 標籤選單',
            routerLink:'menu/tab-menu'
          },
          { 
            label: 'TieredMenu 分層式選單',
            routerLink:'menu/tiered-menu'
          },
        ]
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
      }
    ];
  }

}
