import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,HttpClientModule],
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
  constructor(private router: Router , private userService: UserDataService) {
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
    if (data.role === 'Student') {
      console.log('this is student role ');
      alert('Invalid Credentials')
    }

    if (data.role === 'Teacher') {
      console.log('this is teacher role');
      // for (let index = 0; index < this.userData.length; index++) {
      //   console.log(data.email,'***',this.userData[index].email);
      //   if (data.email === this.userData[index].email && data.password === this.userData[index].password) {
      //     alert('Login Successfully...')
      //     this.router.navigate(['/home'], {})
      //     break;
      //   }
        
      // }
      if (data.email === "manasikale24@gmail.com" && data.password === "manasi") {
        alert('Login Successfully...')
        this.router.navigate(['/home'], {})
       
      }else{
        alert("Invalid Credentials...")
      }
       
    }

    if (data.role === 'Admin') {
      console.log('this is admin role');
      alert('Invalid Credentials')

    }

  }
}
