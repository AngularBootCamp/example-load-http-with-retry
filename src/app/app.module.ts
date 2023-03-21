import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employeeDetail';
import { EmployeeDisplayComponent } from './employeeDisplay';
import { EmployeeListComponent } from './employeeList';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    EmployeeDisplayComponent,
    EmployeeListComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
