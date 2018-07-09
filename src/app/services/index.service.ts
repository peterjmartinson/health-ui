import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreetingsModel } from '../models/app.types';

@Injectable()
export class IndexService  {
    private greetingsUrl = 'http://localhost:8080/greetings';

    constructor(private http: HttpClient) { }

    getGreetings(): Observable<GreetingsModel> {
        return this.http.get<GreetingsModel>(`${this.greetingsUrl}`);
    }
}
