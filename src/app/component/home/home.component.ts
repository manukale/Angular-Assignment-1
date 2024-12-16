import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  student: any[] = [];

  constructor(private router: Router, private userService: UserDataService) { }

  signOut() {
    this.router.navigate(['/login'],{})
  }


  showStudent() {
    this.userService.fetchUserData().subscribe((res) => {
      console.log(res);
      // this.student = res
      for (let i = 0; i < res.length; i++) {
        if (res[i].role === 'Student') {
          this.student.push(res[i])
        }        
      }
      console.log(this.student);
    });
  }
}
