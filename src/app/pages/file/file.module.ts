import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from './../../primeng.module';

import { FileRoutingModule } from './file-routing.module';

import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class FileModule { }
