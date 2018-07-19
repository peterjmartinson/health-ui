import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-patient-form-modal',
    templateUrl: 'patient.component.html'
})
export class PatientComponent implements OnInit  {

  @ViewChild('staticModal') patientModal: any;

  constructor(private router: Router) { }

  ngOnInit()  {
    console.log('Initialization of Modal');
    console.log(this.patientModal);
    this.patientModal.show();
  }
}
