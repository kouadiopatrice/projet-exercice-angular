import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 listSelected?:string;

  navbarlist = [{
      listName:"Pricing",
      url:"/landing"
    },
    {
      listName:"Product pages",
      url:"/pages"
    },
    {
      listName:"About Sunnyside",
      url:"/sunnysides"
    },
    {
      listName:"Careers",
      url:"/careers"
    },
    {
      listName:"Community",
      url:" "
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value:string){
   this.listSelected = value;
  }

}
