import { Component, OnInit } from '@angular/core';
import {Tshirt} from '../shared/model/tshirt';
import {TshirtService} from '../shared/tshirt.service';

@Component({
  selector: 'app-tshirt-list',
  templateUrl: './tshirt-list.component.html',
  styleUrls: ['./tshirt-list.component.css']
})
export class TshirtListComponent implements OnInit {

  constructor(private tshirtService: TshirtService) { }
  tshirts: Tshirt[];
  getTshirts(): void {
    this.tshirtService.getTshirts()
      .subscribe(tshirts => this.tshirts = tshirts);
  }
  detleteTshirt(id: number): void {
    this.tshirtService.deleteTshirt(id);
}
  ngOnInit() {
    this.getTshirts();
  }

}
