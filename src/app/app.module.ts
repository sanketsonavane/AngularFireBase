import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { HeaderComponent } from './header/header.component';

import {ComplaintService} from './complaint.service';

 import {AngularFireDatabaseModule} from 'angularfire2/database';
import { DisplayComplaintComponent } from './display-complaint/display-complaint.component'; 
//  import { AngularFirestore } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ComplaintFormComponent,
    HeaderComponent,
    DisplayComplaintComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [ComplaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
