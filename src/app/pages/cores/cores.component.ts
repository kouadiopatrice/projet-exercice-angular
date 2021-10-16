import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.scss'],
})
export class CoresComponent implements OnInit {
  submitMessage!: string;

  constructor() {}

  ngOnInit(): void {}

  callPhone(value: any) {
    console.log(' template variable value', value);
  }

  onSubmit(value: any) {
    console.log('onSubmit value', value.value.name);
    this.submitMessage = value.value;
    console.log('submit messages ', this.submitMessage);
  }
}
