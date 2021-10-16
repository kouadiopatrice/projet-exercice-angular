import { CareersComponent } from './careers/careers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from './nofound/nofound.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
                        { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
                        { path:'landing', component: LandingComponent},
                        { path:'careers', component: CareersComponent},
                        { path: 'sunnysides', loadChildren: () => import('./sunnysides/sunnyside/sunnyside.module').then(m => m.SunnysideModule) },
                         { path:'', component: LandingComponent, pathMatch: 'full'},
                         { path: '**', component: NofoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
