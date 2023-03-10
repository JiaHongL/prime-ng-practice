import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-programmatic',
  templateUrl: './programmatic.component.html',
  styleUrls: ['./programmatic.component.scss']
})
export class ProgrammaticComponent implements OnInit {
  images!: any[];

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
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
    this.photoService.getImages().then((images) => (this.images = images));
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
}
