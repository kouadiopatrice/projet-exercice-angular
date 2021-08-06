import { Component, OnInit } from '@angular/core';
import { Personel} from 'src/app/@core/mocks/person_team.model'
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {

 person: Personel | any;
 showNavigationArrows = false;
  showNavigationIndicators = false;
 messages:any;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getpersonnel();
  }

  getpersonnel(){
    this.person = [{
      id: 1,
      name: 'Anisha li',
      message: "Manage has superchaged our team's worflow. the ability to maintain visibility on large milestornes at all time keeps everyone motivated ",
      avatar: "/assets/images/avatar-anisha.png"
    },
    {
      id: 2,
      name: " Ali Bravo",
      message: "we have been able to cancel so many other subcriptions since using manage. there is no more cross-chanel confussion and everyone much more focuse ",
      avatar: "/assets/images/avatar-ali.png"
    },
    {
      id:3,
      name: "Richards Watts",
      message: "Manage has superchaged our team's worflow. the ability to maintain visibility on large milestornes at all time keeps everyone motivated ",
      avatar: "/assets/images/avatar-richard.png"
    }
  ]
  }


}
