import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PatientHistoryModel } from '../models/app.types';

@Injectable()
export class PatientHistoryService  {
   private patientUrl = 'http://localhost:8080/history';

    constructor(private http: HttpClient) { }

    getPatientHistoryById(patientId: number): Observable<PatientHistoryModel[]>  {
        return this.http.get<PatientHistoryModel[]>(`${this.patientUrl}/get?patientId=${patientId}`);
    }

    createNewSession(patientId: number, patientHistory: PatientHistoryModel): Observable<PatientHistoryModel>  {
        return this.http.post<PatientHistoryModel>(`${this.patientUrl}/create?patientId=${patientId}`, patientHistory);
    }
}
