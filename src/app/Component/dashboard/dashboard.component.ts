import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any
  constructor(private userservice: UserService) {
    this.userservice.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data.data

    })
  }

}
