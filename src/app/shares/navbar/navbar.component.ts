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
      url:""
    },
    {
      listName:"Product",
      url:""
    },
    {
      listName:"About Us",
      url:""
    },
    {
      listName:"Careers",
      url:"carees"
    },
    {
      listName:"Community",
      url:""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value:string){
    this.listSelected = value;
   }

}
