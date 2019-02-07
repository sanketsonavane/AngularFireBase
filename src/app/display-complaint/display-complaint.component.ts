import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';

@Component({
  selector: 'app-display-complaint',
  templateUrl: './display-complaint.component.html',
  styleUrls: ['./display-complaint.component.css']
})
export class DisplayComplaintComponent implements OnInit {

  constructor(private complaintService: ComplaintService) { }

  complaintArr=[];
  searchText: string = "";

  ngOnInit() {
    this.complaintService.getComplaint().subscribe(
      list => {
        this.complaintArr=list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key){
    if(confirm('Delete Complaint')){
      this.complaintService.deleteComplaint($key);
    }
  }

  filterCondition(complaint) 
  {
    return complaint.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
