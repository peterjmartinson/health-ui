import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PatientComponent } from './patient/patient.component';
import { PatientStatisticsComponent } from './patient/patient.statistics.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'statistics', component: PatientStatisticsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
