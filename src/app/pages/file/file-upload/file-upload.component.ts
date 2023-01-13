import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [MessageService]
})
export class FileUploadComponent {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });

    console.log(this.uploadedFiles);
  }

  onBasicUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onBasicUploadAuto(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  myUploader(event:any){
    console.log('myUploader',event);
  }

}
