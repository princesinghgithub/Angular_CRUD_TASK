import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userservice: UserService,
    private toastr: ToastrService) {

  }
  // reactive form validatore.......\
  SignupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  onSubmit(data: any) {
    let registerData: User = {
      username: data.username,
      email: data.email,
      password: data.password
    }
    this.userservice.registerApi(registerData).subscribe((result) => {
      localStorage.setItem('token', result.token)
      console.log( "token",result.token);
      if (result.token) {
        this.toastr.success('Register Form  is successful');
      } else {
        this.toastr.info('Register Form  is unsuccessful');
      }
    })
  }
}
