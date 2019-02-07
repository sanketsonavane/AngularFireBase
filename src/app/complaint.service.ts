import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  constructor( private firebase:AngularFireDatabase) { }

  complaintList: AngularFireList<any>;

  form = new FormGroup({
    $key : new FormControl(null),
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('', Validators.email),
    mobile : new FormControl('', [Validators.required, Validators.minLength(10)]),
    add : new FormControl('', Validators.required),
    add1 : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required),
    zip : new FormControl('',[Validators.required, Validators.minLength(5)]),
    report : new FormControl('', Validators.required),
    solution : new FormControl('', Validators.required)
  });

  getComplaint(){
    this.complaintList=this.firebase.list('complaint');
    return this.complaintList.snapshotChanges();
  }

  insertComplaint(complaint)
  {
    this.complaintList.push({
      firstName: complaint.firstName,
      lastName: complaint.lastName,
      email: complaint.email,
      mobile: complaint.mobile,
      add: complaint.add,
      add1: complaint.add1,
      city: complaint.city,
      state: complaint.state,
      zip:complaint.zip,
      report:complaint.report,
      solution:complaint.solution
    });
  }

  populateForm(complaint){
    this.form.setValue(complaint);
  }

  updateComplaint(complaint){
    this.complaintList.update(complaint.$key,{
      firstName: complaint.firstName,
      lastName: complaint.lastName,
      email: complaint.email,
      mobile: complaint.mobile,
      report: complaint.report
    });
  }

  deleteComplaint($key: string){
    this.complaintList.remove($key);
  }

}
