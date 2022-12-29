import { Component } from '@angular/core';
import { CEOmessage } from './dialog/CEOmessage/ceomessage';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetails } from './dialog/Contact/contactdetails';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginRegistration';
  sports:string[]=['cricket','football','hockey','snooker'];

  constructor(public dialog: MatDialog) {}



  openDialog1() {

    this.dialog.open(CEOmessage,{

      width: '450px',

      height:'450px'

    });

  }
  openDialog2() {

    this.dialog.open(ContactDetails,{

      width: '450px',

      height:'450px'

    });

  }
}
