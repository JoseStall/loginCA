import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service'
import { CalendarComponent } from './calendar/calendar.component'

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'calendar', component: CalendarComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
AuthenticationService
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class CoreModule { }
