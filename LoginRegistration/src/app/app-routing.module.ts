import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StepperformComponent } from './stepperform/stepperform.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'stepperform', component:StepperformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
