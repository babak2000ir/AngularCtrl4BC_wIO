import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BCCommServiceService} from './bccomm-service.service';
import { AppComponent } from './app.component';
import { NavRecordComponent } from './nav-record/nav-record.component';

@NgModule({
  declarations: [
    AppComponent,
    NavRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BCCommServiceService
  ],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule { 
  ngDoBootstrap(app)
  {
    //const dynamicComponentElement = document.querySelector('#dynamicComponentElement');
    //dynamicComponentElement.textContent = 'Loaded';
    // create DOM element for the component being bootstrapped
    // and add it to the DOM
    //const AppElement = createCustomElement(AppComponent,{ injector: this.injector });
    //customElements.define('app-root', AppElement);

    const componentElement = document.createElement('app-root');
    var ControlAddIn = document.getElementById("controlAddIn");
    ControlAddIn.appendChild(componentElement);
    
    // bootstrap the application with the component
    app.bootstrap(AppComponent);
  }
}
