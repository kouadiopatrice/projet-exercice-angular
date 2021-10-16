import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    CoreComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
