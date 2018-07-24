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
    invalidLoginMessage: string;
    patientExists: boolean;
    patientId: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;

    constructor(private router: Router, private patientService: PatientService)   { }

    ngOnInit()  {
        this.title = 'Patient Treatment Prediction Login';
    }

    logIn(): void  {
        console.log('Hit login button');
        console.log('Patient ID: ' + this.patientId);
        this.patientService.getPatientById(this.patientId)
            .subscribe(
                existingPatient => {
                    if (existingPatient !== null)  {
                        this.patientExists = false;
                        this.invalidLoginMessage = null;
                        this.patientService.setCurrentPatient(existingPatient);
                        this.router.navigate(['/patient']);
                    } else  {
                        this.patientExists = true;
                        this.invalidLoginMessage = `Patient ID: ${this.patientId} does not exist! Register a new patient.`;
                    }
                    return;
                },
                error => {
                    console.log('ERROR');
                    this.invalidLoginMessage = error;
                }
            );
    }

    openModal(): void  {
        this.display = 'block';
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
                'patientCreationTimestamp': null
            }
            ).subscribe(createdUser =>  {
                this.patientExists = false;
                this.invalidLoginMessage = null;
                this.patientService.setCurrentPatient(createdUser);
                this.router.navigate(['/patient']);
            });
    }
}
