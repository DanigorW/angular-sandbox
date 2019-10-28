import {
  Component,
  OnInit
} from '@angular/core';
import {
  User
} from "../models/User"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  enableAdd = true
  


  users: User[]

  constructor() {}



  ngOnInit() {

    this.users = [

      {
        firstName: 'Igor',
        lastName: 'Lev',
        age: 28,
        email: "igor@gmail.com",
        date: new Date(),
        hide: true
      },
      {
        firstName: 'Danit',
        lastName: 'Lev',
        age: 28,
        email: "danit@gmail.com",
        date: new Date(),
        hide: true
      },
      {
        firstName: 'Dima',
        lastName: 'Lev',
        age: 28,
        email: "dima@gmail.com",
        date: new Date(),
        hide: true
      },
    ]

     this.addUser

  }



  addUser(user:User){
    this.users.unshift({
      firstName: 'Natasha',
        lastName: 'Lev',
        age: 50,
        email: "natasha@gmail.com",
        date: new Date()
    })
  }

}
