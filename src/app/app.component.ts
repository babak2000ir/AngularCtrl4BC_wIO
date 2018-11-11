import { Component } from '@angular/core';
import { BCCommServiceService } from './bccomm-service.service';
import { NavRecordComponent } from './nav-record/nav-record.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Control';


  constructor(private bcCommServ: BCCommServiceService) 
  {
  }

  ngOnInit() {
    this.bcCommServ.subscribe('sendCustomer2Angular', NavRecordComponent.GetCustomer)
  }

  sendMsgOut()
  {
    this.showMessgaeToUser("This is a message from Angular Ctrl!");
  }

  showMessgaeToUser(strMessage: string)
  {
    var args:string[]; 
    args = [strMessage];

    this.bcCommServ.fireEvent('showMessageInBC',args);
  }

  

}
