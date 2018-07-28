import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientModel } from '../models/app.types';
import { PatientService } from '../services/patient.service';

@Component({
    templateUrl: 'login.component.html',
    styles: ['login.component.css']
})
export class LoginComponent implements OnInit  {

    title: string;
    display: string;
    loginMessage: string;
    patientExists: boolean;
    patientId: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;

    allPatients: PatientModel[];
    searchManualId: boolean;

    constructor(private router: Router, private patientService: PatientService)   { }

    ngOnInit()  {
        this.title = 'Patient Treatment Prediction Login';
        this.loginMessage = null;
        this.searchManualId = false;
        this.getAllPatients();
    }

    logIn(): void  {
        console.log('Hit login button');
        console.log('Patient ID: ' + this.patientId);
        this.patientService.getPatientById(this.patientId)
            .subscribe(
                existingPatient => {
                    this.patientService.setCurrentPatient(existingPatient);
                    this.router.navigate(['/patient']);
                },
                error => {
                    console.log('ERROR');
                    if (!this.patientId)  {
                        this.loginMessage = 'Must input a Patient ID.';
                    } else  {
                        this.loginMessage = `Patient ID: ${this.patientId} does not exist! Register a new patient.`;
                    }
                });
    }

    getAllPatients(): void  {
        this.patientService.getAllPatients().subscribe(allPatients => {
          this.allPatients = allPatients;
        });
      }

    setGender(gender: string)  {
        this.gender = gender;
    }

    registerNewPatient(): void  {
        console.log('Registering new user...');
        this.patientService.createNewPatient(
            {
                'id': null,
                'firstName': this.firstName,
                'lastName': this.lastName,
                'gender': this.gender,
                'dateOfBirth': this.dateOfBirth,
                'patientCreationTimestamp': null,
                'finalDiagnosis': null,
                'finalDiagnosisTimestamp': null
            }
            ).subscribe(createdUser =>  {
                this.patientService.setCurrentPatient(createdUser);
                this.router.navigate(['/patient']);
            });
    }

    onPatientSelect(countryId) {
        this.patientId = null;
        for (let i = 0; i < this.allPatients.length; i++)  {
          if (this.allPatients[i].id === this.patientId) {
            this.patientId = this.allPatients[i].id;
          }
        }
    }
}
