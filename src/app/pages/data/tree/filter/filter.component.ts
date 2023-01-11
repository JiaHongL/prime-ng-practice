import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  files1!: TreeNode[];

  files2!: TreeNode[];
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
      this.nodeService.getFiles().then(files => this.files2 = files);
  }

}
