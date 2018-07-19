import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'patient.statistics.component.html',
    styles: ['patient.statistics.component.css']
})
export class PatientStatisticsComponent implements OnInit   {

    constructor(private router: Router)   { }

    ngOnInit()   {
    }
}
