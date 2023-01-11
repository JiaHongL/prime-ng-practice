import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit { 
    
  files1!: TreeNode[];

  files2!: TreeNode[];

  files3!: TreeNode[];

  files4!: TreeNode[];

  files5!: TreeNode[];

  virtualFiles!: TreeNode[];

  cols!: any[];

  frozenCols!: any[];

  scrollableCols!: any[];

  dialogVisible!: boolean;

  constructor(private nodeService: NodeService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.nodeService.getFilesystem().then(files => this.files1 = files);
      this.nodeService.getFilesystem().then(files => this.files3 = files);
      this.nodeService.getFilesystem().then(files => this.files4 = files);
      this.nodeService.getFilesystem().then(files => this.files5 = files);
      this.files2 = Array.from({length: 100}).map((_,i) => this.createNode(i, 5));
      this.virtualFiles = Array.from({length: 1000}).map((_,i) => this.createNode(i, 100));

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];

      this.scrollableCols = [
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];

      this.frozenCols = [
          { field: 'name', header: 'Name' },
      ];

      this.primengConfig.ripple = true;
  }

  createNode(i: number, children: number): TreeNode {
      let node: TreeNode = {
          data: {name: 'Node ' + i, type: 'virtual node', size: Math.ceil(Math.random() * 10000) + 'kb'},
          children: Array.from({length: children}).map((_,j) => {
              return { 
                  data: {name: 'Node ' + i + '.' + j, type: 'virtual child node', size: Math.ceil(Math.random() * 10000) + 'kb'}
              }
          })
      };

      return node;
  }

  showDialog() {
      this.dialogVisible = true;
  }
}
