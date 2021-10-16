import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunnyside',
  templateUrl: './sunnyside.component.html',
  styleUrls: ['./sunnyside.component.scss']
})
export class SunnysideComponent implements OnInit {

   client_testimonials = [
    {
      id:1,
      name: "Emily R.",
      role: "Marketing Director",
      avatar: "/assets/images/image-emily.jpg",
      message: "We put our trust in SunnySide and they divered, making sure our neede were met and deadlnes were always hit."
    },
    {
      id:2,
      name: "Thomas S.",
      role: "Chief Operating officer",
      avatar: "/assets/images/image-thomas.jpg",
      message: "SunnySide's enthousiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
    },
    {
      id:3,
      name: "Jennie F.",
      role: "Business Owner",
      avatar: "/assets/images/image-jennie.jpg",
      message:"Incredible end result ! Our sales increased over 400% when we worked with SunnySide. Highly recommended!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
