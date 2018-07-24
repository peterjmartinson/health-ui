import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PatientService } from './services/patient.service';
import { PatientHistoryService } from './services/patient.history.service';
import { LoginComponent } from './login/login.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    [ModalModule.forRoot()]
  ],
  providers: [
    PatientService,
    PatientHistoryService,
    BsModalRef,
    BsModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
