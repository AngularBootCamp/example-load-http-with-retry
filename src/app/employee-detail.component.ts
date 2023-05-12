import { Component, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  @Input() employee: Employee | undefined;
}
