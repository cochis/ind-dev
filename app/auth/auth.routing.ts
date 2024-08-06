import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RememberComponent } from './pages/remember/remember.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [

      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'login', component: LoginComponent },
      { path: 'reset-password', component: RememberComponent },
      { path: 'new-password', component: ResetPasswordComponent },
      { path: 'verification/:token/:email', component: VerificationComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
