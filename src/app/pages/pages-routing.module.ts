import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { CoresComponent } from './cores/cores.component';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    // children:[
    //   { path: 'landing', component: LandingComponent },
    //   { path: 'cores', component: CoresComponent},
    //   { path: 'careers', component: CareersComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
