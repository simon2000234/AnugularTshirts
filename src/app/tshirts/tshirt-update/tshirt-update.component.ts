import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {Tshirt} from '../shared/model/tshirt';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tshirt-update',
  templateUrl: './tshirt-update.component.html',
  styleUrls: ['./tshirt-update.component.css']
})
export class TshirtUpdateComponent implements OnInit {

  constructor(private service: TshirtService, private form: FormBuilder, private  route: ActivatedRoute, private navigator: Router) { }
  tshirtForm = this.form.group({
    price: [''],
    size: [''],
    color: [''],
    type: [''],
    isMan: [''],
    imgLink: ['']})
  updateTshirt(tshirt: Tshirt): void {
    tshirt.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.updateTshirt(tshirt).subscribe(() => this.navigator.navigateByUrl('/tshirts'));
  }
  ngOnInit() {
    this.service.getTshirtById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      tshirt => {
        this.tshirtForm.patchValue(tshirt);
      }
    );
  }

}
