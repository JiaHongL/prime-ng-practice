import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  providers:[MessageService]
})
export class ContextMenuComponent implements OnInit {

  files!: TreeNode[];

  selectedNode!: TreeNode;

  cols!: any[];

  items!: MenuItem[];

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];

    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
      { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
    ];
  }

  viewFile(node: any) {
    this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
  }

  toggleFile(node: any) {
    node.expanded = !node.expanded;
    this.files = [...this.files];
  }
}
