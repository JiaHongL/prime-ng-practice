import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {
  nodes1!: any[];

  nodes2!: any[];

  nodes3!: any[];

  nodes4!: any[];

  selectedNodes1: any[] = [];

  selectedNodes2: any[] = [];

  selectedNodes3: any[] = [];

  selectedNode: any;

  constructor(public nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.nodes1 = files);
      this.nodeService.getFiles().then(files => this.nodes2 = files);
      this.nodeService.getFiles().then(files => this.nodes3 = files);
      this.nodeService.getFiles().then(files => this.nodes4 = files);
  }
}
