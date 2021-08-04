import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from '../user';
import * as fromUser from '../user.selectors';
import * as Useraction from '../user.actions'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pageTitle = 'User List';
  errorMessage = '';
  user: IUser[] = [];
  

  constructor(private store: Store, private userService: UsersService) { }

  ngOnInit(): void {
    this.store.dispatch(new Useraction.LoadUsers());//action dispach
    this.store.pipe(select(fromUser.getUsers)).subscribe(userss =>{
      this.user = userss;
    })
  }

}
