import { Component } from '@angular/core';
import { UserService  } from 'src/app/Services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public userservice:UserService,){

}
}
