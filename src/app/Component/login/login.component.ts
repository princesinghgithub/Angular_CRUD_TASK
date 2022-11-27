import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  toaster: any;
  constructor(private userservice: UserService,
    private router: Router,
    private toastr: ToastrService) {

  }
  // reactive form validatore.......\
  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  onSubmit(data: any) {
    let loginUser: User = {
      username: data.username,
      email: data.email,
      password: data.password
    }
    this.userservice.loginApi(loginUser).subscribe((result) => {
      console.log(result);

      if (result) {
        alert("Login successfull !..")
        // this.toaster.success("Login successfull !..")
        this.router.navigate(['/dash'])
        localStorage.setItem('token', result.token)
      } else {
        alert("username and password is incorrect")
        // this.toaster.error("username and password is incorrect")
      }
    })
  }
}
