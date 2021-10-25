import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CareersComponent } from './careers/careers.component';
import { LandingComponent } from './landing/landing.component';
import { SharesModule } from '../shares/shares.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { OutZoneWatchingService } from '../services/out-zone-watching.service';
import { SharkDirective } from './directives/shark.directive';
import { CoresComponent } from './cores/cores.component';

@NgModule({
  declarations: [
    PagesComponent,
    CareersComponent,
    LandingComponent,
    CoresComponent,
    UnlessDirective,
    SharkDirective,
  ],
  imports: [CommonModule, PagesRoutingModule, SharesModule, FormsModule],
  providers: [OutZoneWatchingService],
})
export class PagesModule {}
