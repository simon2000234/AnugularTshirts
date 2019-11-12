import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  constructor(private tshirtService: TshirtService,
              private  route: ActivatedRoute) {
  }
  getUser(id): void {
    this.tshirtService.getUserById(id).subscribe(user => this.user = user);
  }
  ngOnInit() {
    const id = Number( this.route.snapshot.paramMap.get('id'));
    this.getUser(id);
  }

}
