import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {Tshirt} from '../shared/model/tshirt';
import {ActivatedRoute, Router} from '@angular/router';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-tshirt-detail',
  templateUrl: './tshirt-detail.component.html',
  styleUrls: ['./tshirt-detail.component.css']
})
export class TshirtDetailComponent implements OnInit {
  tshirt: Tshirt;
  constructor(private tshirtService: TshirtService,
              private  route: ActivatedRoute) {
  }
  getTshirt(id): void {
    this.tshirtService.getTshirtById(id).subscribe(tshirt => this.tshirt = tshirt);
  }
  ngOnInit() {
    const id = Number( this.route.snapshot.paramMap.get('id'));
    this.getTshirt(id);
  }

}
