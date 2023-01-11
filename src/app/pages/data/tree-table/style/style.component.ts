import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  styles: [`
  .kb-row {
      background-color: rgba(0,0,0,.15) !important;
  }

  .kb-cell {
      font-weight: 700;
      color: #FF5252;
      text-decoration: line-through;
  }
`]
})
export class StyleComponent implements OnInit {

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

