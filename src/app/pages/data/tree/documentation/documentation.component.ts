import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit  { 
  files1!: TreeNode[];
  
  files2!: TreeNode[];
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
      this.nodeService.getFiles().then(files => this.files2 = files);
  }
  
  expandAll(){
      this.files2.forEach( node => {
          this.expandRecursive(node, true);
      } );
  }

  collapseAll(){
      this.files2.forEach( node => {
          this.expandRecursive(node, false);
      } );
  }
  
  private expandRecursive(node:TreeNode, isExpand:boolean){
      node.expanded = isExpand;
      if (node.children){
          node.children.forEach( childNode => {
              this.expandRecursive(childNode, isExpand);
          } );
      }
  }
}
