import { Component, OnInit } from '@angular/core';
import {TshirtService} from '../shared/tshirt.service';
import {Tshirt} from '../shared/model/tshirt';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tshirt-create',
  templateUrl: './tshirt-create.component.html',
  styleUrls: ['./tshirt-create.component.css']
})
export class TshirtCreateComponent implements OnInit {
  tshirtForm = this.form.group({
    price: [''],
    size: [''],
    color: [''],
    type: [''],
    isMan: [false],
    imgLink: ['']})
  constructor(private tshirtService: TshirtService, private form: FormBuilder, private router: Router) { }
  createTshirt(tshirt: Tshirt): void {
    this.tshirtService.createTshirt(tshirt as Tshirt).subscribe(() => {
      this.router.navigateByUrl('/tshirts');
    });
}
  ngOnInit() {
  }

}
