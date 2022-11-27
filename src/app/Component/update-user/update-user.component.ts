import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })
  constructor(private router: ActivatedRoute, private userservice: UserService) {
    this.userservice.getCurrentUser(this.router.snapshot.params['id']).subscribe((result) => {
      console.log(result);
      this.updateForm = new FormGroup({
        firstName: new FormControl(result.data.first_name),
        lastName: new FormControl(result.data.last_name),
        email: new FormControl(result.data.email)
      })
    })
  }
  ngOninit(): void {
    // console.log(this.router.snapshot.params['id']);
  }
  collection() {
    console.log("item", this.updateForm.value);
    this.userservice.updateUser(this.router.snapshot.params['id'], this.updateForm.value).subscribe((result) => {
      console.log("result", result);
    })
  }
}
