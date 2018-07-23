import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PatientModel } from '../models/app.types';

@Injectable()
export class PatientService  {
    private patientUrl = 'http://localhost:8080/patient';
    private currentPatient: PatientModel;

    constructor(private http: HttpClient) { }

    setCurrentPatient(patient: PatientModel): void  {
        this.currentPatient = patient;
    }

    getAllPatients(): Observable<PatientModel[]> {
        return this.http.get<PatientModel[]>(`${this.patientUrl}/getAll`);
    }

    getPatientById(patientId: number): Observable<PatientModel>  {
        return this.http.get<PatientModel>(`${this.patientUrl}/get?patientId=${patientId}`);
    }

    createNewPatient(patient: PatientModel): Observable<PatientModel>  {
        return this.http.post<PatientModel>(`${this.patientUrl}/create`, patient);
    }

    deletePatientById(patientId: number): Observable<string>  {
        return this.http.delete<string>(`${this.patientUrl}/delete?patientId=${patientId}`);
    }

    updatePatientById(patientId: number, request: PatientModel): Observable<PatientModel>  {
        return this.http.put<PatientModel>(`${this.patientUrl}/update?patientId=${patientId}`, request);
    }
}
