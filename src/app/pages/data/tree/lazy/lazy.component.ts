import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';

import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  providers: [MessageService]
})
export class LazyComponent implements OnInit {
  files!: TreeNode[];

  loading!: boolean;

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.nodeService.getLazyFiles().then(files => this.files = files);
      this.loading = false;
    }, 1000);
  }

  nodeExpand(event: any) {
    if (event.node) {
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.nodeService.getLazyFiles().then(nodes => {
        event.node.children = nodes
        this.messageService.add({ severity: 'info', summary: 'Children Loaded', detail: event.node.label });
      });
    }
  }

}
