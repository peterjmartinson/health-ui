import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { PatientHistoryService } from './services/patient.history.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patient', component: PatientComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
