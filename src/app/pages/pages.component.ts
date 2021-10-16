import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  condition = false;
  lessons = ['Mathematique', 'Science', 'Physique'];

  constructor() {}

  ngOnInit(): void {}
}
