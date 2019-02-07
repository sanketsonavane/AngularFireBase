import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent implements OnInit {

  constructor(private complaintService : ComplaintService) { }

  submitted:boolean;
  formControls = this.complaintService.form.controls;

  ngOnInit() {
    // this.complaintService.getComplaint();
  }

  onSubmit(){
    this.submitted = true;
    if(this.complaintService.form.valid){
      if (this.complaintService.form.get('$key').value == null)
      {
        this.complaintService.insertComplaint(this.complaintService.form.value);
      } 
      else {
        this.complaintService.updateComplaint(this.complaintService.form.value);
      }
      this.submitted = false;

      this.complaintService.form.setValue({
        $key: null,
        firstName: '',
        lastName :'',
        email: '',
        mobile: '',
        add: '',
        add1: '',
        city: '',
        state: '',
        zip: '',
        report: '',
        solution: ''
      })
    }
  }
}
