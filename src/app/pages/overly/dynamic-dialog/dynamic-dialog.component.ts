import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/services/product.service';
import { ProductListDemo } from './product-list-dialog';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss'],
  providers: [DialogService, MessageService]
})
export class DynamicDialogComponent {

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ref!: DynamicDialogRef;

  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Choose a Product',
      data:{
        itemId:'123'
      },
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
