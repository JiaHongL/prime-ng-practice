import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
