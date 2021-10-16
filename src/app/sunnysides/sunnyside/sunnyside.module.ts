import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunnysideRoutingModule } from './sunnyside-routing.module';
import { SunnysideComponent } from './sunnyside.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarSunnyComponent } from '../nav-bar-sunny/nav-bar-sunny.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    SunnysideComponent,
    NavBarSunnyComponent
  ],
  imports: [
    CommonModule,
    SunnysideRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule

  ]
})
export class SunnysideModule { }
