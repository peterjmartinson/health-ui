import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientHistoryService } from '../services/patient.history.service';
import { PatientModel, PatientHistoryModel, UWDataModel } from '../models/app.types';

@Component({
    selector: 'app-patient-form',
    templateUrl: 'patient.component.html'
})
export class PatientComponent implements OnInit  {

  constructor(private router: Router, private patientService: PatientService, private patientHistoryService: PatientHistoryService) { }

  patient: PatientModel;
  patientHistoryList: PatientHistoryModel[];
  data: UWDataModel;
  comments: string;

  ngOnInit()  {
    this.patient = this.patientService.getCurrentPatient();
    this.viewPatientHistory();
  }

  viewPatientHistory(): void  {
    this.patientHistoryService.getPatientHistoryById(this.patient.id)
      .subscribe(patientHistoryList => {
        this.patientHistoryList = patientHistoryList;
      });
  }

  newSession(): void  {
    this.patientHistoryService.createNewSession(
      this.patient.id,
      {
        'id': this.patient.id,
        'patient': this.patient,
        'data': this.data,
        'measurementTimestamp': null,
        'predictedDiagnosis': null,
        'comments': this.comments
      }).subscribe(newPatientHistory => {
        this.patientHistoryList.push(newPatientHistory);
      });
  }

  logOut(): void  {
    this.patientService.setCurrentPatient(null);
    this.router.navigate(['/login']);
  }
}
