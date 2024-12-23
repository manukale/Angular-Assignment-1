import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  student: any[] = [];
user :any={
  userName:'',
  role:'',
  dept:''
}
  constructor(private router: Router, private userService: UserDataService, private route : ActivatedRoute) { }

  ngOnInit(){
    console.log('manasi');
    
    this.route.params.subscribe((p) => {
      console.log(p['id']);
    });

    this.route.queryParamMap.subscribe((ele) => {
      console.log(ele.get('name'));
      this.user.userName = ele.get('name')
      this.user.role = ele.get('role')
      this.user.dept = ele.get('dept')
     
    });

    console.log(this.student,'***');

    this.showStudent()
    
  }

  signOut() {
    this.router.navigate(['/login'],{})
  }


  showStudent() {
    this.student = []
    this.userService.fetchUserData().subscribe((res) => {
      console.log(res);   
      for (let i = 0; i < res.length; i++) {
        if (res[i].role === 'Student') {
          this.student.push(res[i])
        }        
      }
      console.log(this.student);
    });
  }
}
