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
    this.resetCurrentHistory();
  }

  resetCurrentHistory(): void  {
    this.data = {
      'id': 0.0,
      'radiusMean': 0.0,
      'textureMean': 0.0,
      'perimeterMean': 0.0,
      'areaMean': 0.0,
      'smoothnessMean': 0.0,
      'compactnessMean': 0.0,
      'concavityMean': 0.0,
      'concavePointsMean': 0.0,
      'symmetryMean': 0.0,
      'fractalDimensionMean': 0.0,
      'radiusSe': 0.0,
      'textureSe': 0.0,
      'perimeterSe': 0.0,
      'areaSe': 0.0,
      'smoothnessSe': 0.0,
      'compactnessSe': 0.0,
      'concavitySe': 0.0,
      'concavePointsSe': 0.0,
      'symmetrySe': 0.0,
      'fractalDimensionSe': 0.0,
      'radiusWorst': 0.0,
      'textureWorst': 0.0,
      'perimeterWorst': 0.0,
      'areaWorst': 0.0,
      'smoothnessWorst': 0.0,
      'compactnessWorst': 0.0,
      'concavityWorst': 0.0,
      'concavePointsWorst': 0.0,
      'symmetryWorst': 0.0,
      'fractalDimensionWorst': 0.0
    };
  }

  viewPatientHistory(): void  {
    this.patientHistoryService.getPatientHistoryById(this.patient.id)
      .subscribe(patientHistoryList => {
        this.patientHistoryList = patientHistoryList;
      },
      error => {
        console.log(error);
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
      },
      error => {
        console.log(error);
    });
    this.resetCurrentHistory();
  }

  logOut(): void  {
    this.patientService.setCurrentPatient(null);
    this.router.navigate(['/login']);
  }
}
