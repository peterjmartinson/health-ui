import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IndexService } from './services/index.service';
import { PatientComponent } from './patient/patient.component';
import { NavComponent } from './navigation/nav.component';
import { PatientStatisticsComponent } from './patient/patient.statistics.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PatientComponent,
    PatientStatisticsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    [ModalModule.forRoot()]
  ],
  providers: [
    IndexService,
    BsModalRef,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
