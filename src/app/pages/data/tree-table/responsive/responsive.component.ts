import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss'],
  styles: [`
    :host ::ng-deep .priority-2, 
    :host ::ng-deep .priority-3,
    :host ::ng-deep .visibility-sm {
        display: none;
    }

    @media screen and (max-width: 39.938em) {
        :host ::ng-deep .visibility-sm {
            display: inline;
        }
    }

    @media screen and (min-width: 40em) {
        :host ::ng-deep .priority-2 {
            display: table-cell;
        }
    }

    @media screen and (min-width: 64em) {
        :host ::ng-deep .priority-3 {
            display: table-cell;
        }
    }
  `]
})
export class ResponsiveComponent implements OnInit {

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
