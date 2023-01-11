import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  files!: TreeNode[];

  selectedFile!: TreeNode;
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => {
          this.files = [{
              label: 'Root',
              children: files
          }];
      });
  }

}
