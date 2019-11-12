import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm = this.form.group({
    username: [''],
    isAdmin: [false],
    password: ['']});
  constructor(private tshirtService: TshirtService, private form: FormBuilder, private router: Router) { }
  createUser(user: User): void {
    this.tshirtService.createUser(user as User).subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }
  ngOnInit() {
  }

}
