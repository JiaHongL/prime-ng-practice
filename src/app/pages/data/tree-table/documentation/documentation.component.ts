import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  files1!: TreeNode[];

  files2!: TreeNode[];

  cols!: any[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFilesystem().then(files => this.files1 = files);
      this.nodeService.getFilesystem().then(files => this.files2 = files);

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }

}
