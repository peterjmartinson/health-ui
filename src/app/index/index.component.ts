import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { GreetingsModel } from '../models/app.types';
import { IndexService } from '../services/index.service';

@Component({
    templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit   {

    display: GreetingsModel = null;

    constructor(private router: Router, private indexService: IndexService)   { }

    ngOnInit()   {
        this.indexService.getGreetings().subscribe(greeting => this.display = greeting);
    }
}
