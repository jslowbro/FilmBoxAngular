import {OnInit} from '@angular/core';

export class Config implements OnInit {
  serverAddress: string;
  ngOnInit(): void {
    this.serverAddress = '//localhost:8080';
  }
}
