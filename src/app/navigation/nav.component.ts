import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav.component.html'
})
export class NavComponent {

    constructor(private router: Router)   { }

    home(): void  {
        this.router.navigate(['/index']);
    }

    newPatient(): void  {
        this.router.navigate(['/patient']);
    }

    newPatientStatistics(): void  {
        this.router.navigate(['/statistics']);
    }
}
