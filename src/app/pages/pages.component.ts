import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OutZoneWatchingService } from '../services/out-zone-watching.service';
import { CareersComponent } from './careers/careers.component';
import { SharkDirective } from './directives/shark.directive';

@Component({
  selector: 'app-pages',
  animations: [
    trigger('openClose', [
      // ...
      // animation triggers go here

      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
          fontSize: '16px',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
          textTransform: 'uppercase',
          color: 'whitespace',
        })
      ),

      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],

  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, AfterViewInit {
  condition = false;
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons!: string[];
  isOpen = true;

  extraCreature!: string;
  //viewChld with directive
  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }
  // viewChld with a DOM element
  @ViewChild('someInput') someInput!: ElementRef;

  // viewChld with child component variable or method;
  @ViewChild(CareersComponent) child!: CareersComponent;

  constructor(private angularZone: OutZoneWatchingService) {}

  ngOnInit(): void {
    this.lessons = ['Mathematique', 'science et technologie', 'FranÇais'];
    console.log('lessons', this.lessons);
  }

  ngAfterViewInit(): void {
    console.log(this.extraCreature); // Dolphin

    this.someInput.nativeElement.value = 'Whale!';

    console.log(this.child.whoAmI()); // I am a child component!
  }

  login() {
    console.log('Login');
  }
  signUp() {
    console.log('Sign Up');
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
