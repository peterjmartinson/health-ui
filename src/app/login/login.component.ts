import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientModel } from '../models/app.types';
import { PatientService } from '../services/patient.service';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit  {

    title: string;
    display: string;
    invalidLoginMessage: string;
    patientExists: boolean;
    patientId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;

    constructor(private router: Router, private patientService: PatientService)   { }

    ngOnInit()  {
        this.title = 'Patient Treatment Prediction Login';
    }

    logIn(): void  {
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

    registerNewPatient(): void  {
        console.log('Registering new user...');
        const patientModel = {
            'id': null,
            'firstName': this.firstName,
            'lastName': this.lastName,
            'gender': this.gender,
            'dateOfBirth': this.dateOfBirth,
            'patientCreationTimestamp': null
        };

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
                this.onCloseHandled();
            });
    }

    onCloseHandled(): void  {
        this.display = 'none';
        console.log('CLOSED');
    }
}
