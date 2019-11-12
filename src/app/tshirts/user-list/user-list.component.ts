import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: TshirtService) { }
  users: User[];
  getUsers(): void {
    this.service.getUsers()
      .subscribe(users => this.users = users);
  }
  detleteUsers(id: number): void {
    this.service.deleteUser(id);
  }

  ngOnInit() {
    this.getUsers();
  }

}
