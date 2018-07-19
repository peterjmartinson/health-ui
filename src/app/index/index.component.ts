import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GreetingsModel } from '../models/app.types';
import { IndexService } from '../services/index.service';

@Component({
    templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit   {

    constructor(private router: Router)   { }

    ngOnInit()   {
    }

    home(): void  {
        this.router.navigate(['/index']);
    }

    newPatient(): void  {
        this.router.navigate(['/patient']);
    }
}
