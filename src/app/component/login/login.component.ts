import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any[] = [];
  user: {
    email: '',
    password: '',
    role: ''
  }
  constructor(private router: Router, private userService: UserDataService) {
    this.user = {
      email: '',
      password: '',
      role: ''
    }
  }
  fetchData() {
    this.userService.fetchUserData().subscribe((res) => {
      this.userData = res;
    });
  }

  ngOnInit() {
    this.fetchData();
  }
  loginForm(data: any) {
    console.log(this.userData, 'res in fetch data');
    if (data.role === '' || data.email === '' || data.password === '') {
      console.log('role is not selected');
      alert('Please Fill All The Details...')

    }

    for (let index = 0; index < this.userData.length; index++) {
      // console.log('this is teacher role');

      if (data.email === this.userData[index].email && data.password === this.userData[index].password && data.role === this.userData[index].role) {
        // console.log(this.userData[index].name);
        // this.router.navigate(['/home'], {})   //query.param
        alert('Login Successfully...')
        if (this.userData[index].role === 'Teacher') {

          this.router.navigate(['/home', this.userData[index].id], {
            // queryParams : this.userData[index].name && this.userData[index].role
            queryParams: {
              name: this.userData[index].name,
              role: this.userData[index].role,
              dept: this.userData[index].dept,
            }
          })   //query.param
          // break;
        }
        if (this.userData[index].role === 'Admin') {

          console.log('Admin');
          this.router.navigate(['/admin'], {
            // queryParams : this.userData[index].name && this.userData[index].role
            // queryParams: {
            //   name: this.userData[index].name,
            //   role: this.userData[index].role,
            //   dept: this.userData[index].dept,
            // }
          })
          
        }
        if (this.userData[index].role === 'Student') {
          this.router.navigate(['/student'], {
            // queryParams : this.userData[index].name && this.userData[index].role
            // queryParams: {
            //   name: this.userData[index].name,
            //   role: this.userData[index].role,
            //   dept: this.userData[index].dept,
            // }
          })
          
        }
      }
      // else{
      //   alert('Check Your Credentials...')
      //   break;
      // }

    }
    



  }
}
