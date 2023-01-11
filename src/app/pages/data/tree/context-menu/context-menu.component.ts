import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  providers: [MessageService]
})
export class ContextMenuComponent implements OnInit {
  files!: TreeNode[];

  files2 = [
    {
      key: '0',
      label: 'Introduction',
      children: [
        { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'sub' },
        { key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'sub' },
      ]
    },
    {
      key: '1',
      label: 'Components In-Depth',
      children: [
        { key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'sub' },
        { key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'sub' },
      ]
    }
  ]

  selectedFile!: TreeNode | null;

  items!: MenuItem[];

  items2!: MenuItem[];

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.nodeService.getFiles().then(files => {
      this.files = files;
    });

    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile) },
      { label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile() }
    ];

    this.items2 = [
      { label: 'Delete', icon: 'pi pi-delete' }
    ];

  }

  viewFile(file: TreeNode | null) {
    this.messageService.add({ severity: 'info', summary: 'Node Details', detail: file?.label });
  }

  unselectFile() {
    this.selectedFile = null;
  }
}
