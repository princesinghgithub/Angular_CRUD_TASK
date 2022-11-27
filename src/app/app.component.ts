import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './Model/user';
import { UserService } from './Services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any
  title = 'Angular-Task';
  constructor(private userservice:UserService){
    this.userservice.getUsers().subscribe((data)=>{
console.log(data);
this.users=data.data

    })
  }

}
