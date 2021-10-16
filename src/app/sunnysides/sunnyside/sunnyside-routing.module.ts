import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunnysideComponent } from './sunnyside.component';

const routes: Routes = [{ path: '', component: SunnysideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunnysideRoutingModule { }
