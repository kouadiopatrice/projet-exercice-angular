import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersComponent } from './footers/footers.component';
import { TeamWorksComponent } from './team-works/team-works.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FootersComponent,
    TeamWorksComponent
  ],
  imports: [
    SharesRoutingModule,
    CommonModule,
   // BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    NavbarModule,
    WavesModule,
    NgbModule,
    CarouselModule
  ],
  exports: [NavbarComponent,FootersComponent,TeamWorksComponent]

})
export class SharesModule { }
