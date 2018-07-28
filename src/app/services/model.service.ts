import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataAnalysisModel } from '../models/app.types';

@Injectable()
export class ModelService  {
   private modelUrl = 'http://localhost:8080/model';

    constructor(private http: HttpClient) { }

    getAllModels(): Observable<DataAnalysisModel[]>  {
        return this.http.get<DataAnalysisModel[]>(`${this.modelUrl}/getAll`);
    }
}
