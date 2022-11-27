import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-d-board',
  templateUrl: './d-board.component.html',
  styleUrls: ['./d-board.component.css']
})
export class DBoardComponent {
  users: any
  constructor(private userservice: UserService) {
    this.userservice.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data.data

    })
  }
  deleteUser(user: any){
// console.log(user);

this.userservice.deleteUsers(user).subscribe((res)=>{
console.log(res);

})
// this.userservice.deleteUser(user).subscribe((result)=>{
// console.log(resul);

// })


  }
}
