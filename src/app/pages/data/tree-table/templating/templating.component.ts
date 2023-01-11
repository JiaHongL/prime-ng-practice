import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingComponent implements OnInit {
  files!: TreeNode[];

  cols!: any[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {

    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];

  }

}
