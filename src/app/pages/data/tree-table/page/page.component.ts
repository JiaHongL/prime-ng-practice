import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  files!: TreeNode[];

  cols!: any[];

  constructor(private nodeService: NodeService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.files = [];
      for(let i = 0; i < 50; i++) {
          let node = {
              data:{  
                  name: 'Item ' + i,
                  size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                  type: 'Type ' + i
              },
              children: [
                  {
                      data: {  
                          name: 'Item ' + i + ' - 0',
                          size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                          type: 'Type ' + i
                      }
                  }
              ]
          };

          this.files.push(node);
      }

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
    this.primengConfig.ripple = true;
  }
}
