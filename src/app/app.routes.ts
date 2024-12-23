import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { StudentComponent } from './component/student/student.component';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"home/:id", component:HomeComponent},
    {path:"admin", component:AdminComponent},
    {path:"student", component:StudentComponent}
];
