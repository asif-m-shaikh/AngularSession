import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AuthService } from './Component/services/auth.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthService] },
  { path: 'register', component: RegisterComponent },
  { path: 'user', loadChildren: './Component/user/user.module#UserModule', canActivate: [AuthService], data: ["user"] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
