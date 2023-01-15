import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  images!: any[];

  responsiveOptions: any[] = [{
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then(images => this.images = images)
  }

}