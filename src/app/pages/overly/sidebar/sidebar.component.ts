import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  visibleSidebar1 = false;

  visibleSidebar2 = false;

  visibleSidebar3 = false;

  visibleSidebar4 = false;

  visibleSidebar5 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
