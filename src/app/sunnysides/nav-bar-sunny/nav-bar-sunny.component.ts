import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-sunny',
  templateUrl: './nav-bar-sunny.component.html',
  styleUrls: ['./nav-bar-sunny.component.scss']
})
export class NavBarSunnyComponent implements OnInit {

navbarListe = [
  {
  textList:'About',
  url:'/sunnysides'
},
{
  textList:'Services',
  url:'/sunnysides'
},
{
  textList:'projects',
  url:'/sunnysides'
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
