import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit   {

    display?: string;

    constructor(private router: Router)   { }

    ngOnInit()   {
        this.display = 'testing index component';
    }
}
