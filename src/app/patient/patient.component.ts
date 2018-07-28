import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientHistoryService } from '../services/patient.history.service';
import { PatientModel, PatientHistoryModel, UWDataModel, DataAnalysisModel } from '../models/app.types';
import { ModelService } from '../services/model.service';

@Component({
    selector: 'app-patient-form',
    templateUrl: 'patient.component.html'
})
export class PatientComponent implements OnInit  {

  constructor(private router: Router,
              private patientService: PatientService,
              private patientHistoryService: PatientHistoryService,
              private modelService: ModelService) { }

  errorMessage: string;
  patient: PatientModel;
  patientHistoryList: PatientHistoryModel[];
  data: UWDataModel;
  comments: string;
  chosenModel: DataAnalysisModel;
  models: DataAnalysisModel[];

  tempFinalDiagnosis: string;

  ngOnInit()  {
    this.errorMessage = null;
    this.patient = this.patientService.getCurrentPatient();
    this.getModels();
    if (this.isPatientLoggedIn())  {
      this.viewPatientHistory();
    }
    this.resetCurrentHistory();
  }

  isPatientLoggedIn(): boolean  {
    if (this.patient === undefined)  {
      return false;
    } else  {
      return true;
    }
  }

  resetCurrentHistory(): void  {
    this.data = {
      'id': null,
      'radiusMean': null,
      'textureMean': null,
      'perimeterMean': null,
      'areaMean': null,
      'smoothnessMean': null,
      'compactnessMean': null,
      'concavityMean': null,
      'concavePointsMean': null,
      'symmetryMean': null,
      'fractalDimensionMean': null,
      'radiusSe': null,
      'textureSe': null,
      'perimeterSe': null,
      'areaSe': null,
      'smoothnessSe': null,
      'compactnessSe': null,
      'concavitySe': null,
      'concavePointsSe': null,
      'symmetrySe': null,
      'fractalDimensionSe': null,
      'radiusWorst': null,
      'textureWorst': null,
      'perimeterWorst': null,
      'areaWorst': null,
      'smoothnessWorst': null,
      'compactnessWorst': null,
      'concavityWorst': null,
      'concavePointsWorst': null,
      'symmetryWorst': null,
      'fractalDimensionWorst': null
    };
    this.chosenModel = null;
    this.comments = null;
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
    console.log(this.chosenModel.modelName);
    this.patientHistoryService.createNewSession(
      this.patient.id,
      {
        'id': this.patient.id,
        'patient': this.patient,
        'data': this.data,
        'model': this.chosenModel,
        'dateOfMeasurement': null,
        'predictedDiagnosis': null,
        'comments': this.comments
      }).subscribe(newPatientHistory => {
        this.patientHistoryList.push(newPatientHistory);
      },
      error => {
        console.log(error);
        this.errorMessage = error;
    });
    this.resetCurrentHistory();
  }

  submitFinalDiagnosis(): void  {
    this.patientService.updatePatientByIdFinalDiagnosis(this.patient.id, this.tempFinalDiagnosis)
      .subscribe(patient => {
        this.patient.finalDiagnosis = patient.finalDiagnosis;
      });
  }

  setTempFinalDiagnosis(diagnosis: string)  {
    this.tempFinalDiagnosis = diagnosis;
  }

  getModels(): void  {
    this.modelService.getAllModels().subscribe(models => {
      this.models = models;
    });
  }

  logOut(): void  {
    this.patientService.setCurrentPatient(null);
    this.router.navigate(['/login']);
  }
}
