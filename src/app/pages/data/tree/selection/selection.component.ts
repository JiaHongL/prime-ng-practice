import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [MessageService]
})
export class SelectionComponent implements OnInit {
  files1!: TreeNode[];

  files2!: TreeNode[];

  files3!: TreeNode[];

  selectedFile!: TreeNode;

  selectedFiles1!: TreeNode;

  selectedFiles2!: TreeNode;

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.files1 = files));
    this.nodeService.getFiles().then((files) => (this.files2 = files));
    this.nodeService.getFiles().then((files) => (this.files3 = files));
  }

  nodeSelect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label,
    });
  }

  nodeUnselect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label,
    });
  }
  
}
