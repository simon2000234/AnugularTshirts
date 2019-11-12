import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Tshirt} from '../shared/model/tshirt';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private service: TshirtService, private form: FormBuilder, private  route: ActivatedRoute, private navigator: Router) { }
  userForm = this.form.group({
    username: [''],
    isAdmin: [''],
    password: ['']});
  updateUser(user: User): void {
    user.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.updateUsers(user).subscribe(() => this.navigator.navigateByUrl('/users'));
  }
  ngOnInit() {
    this.service.getUserById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      user => {
        this.userForm.patchValue(user);
      }
    );
  }

}
