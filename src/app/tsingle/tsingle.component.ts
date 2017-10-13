import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { ItemService } from '../todolist.service';
import { Item } from '../item';

@Component({
  selector: 'app-tsingle',
  templateUrl: './tsingle.component.html',
  styleUrls: ['./tsingle.component.css'],
  //providers: [ItemService]
})

export class TsingleComponent implements OnInit {

  item: Item[] = [];
  id: number;

  private routeSubscription: Subscription;

  constructor (private itemService: ItemService, private router: Router, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    console.log(this.itemService.items);
    this.item = this.itemService.getItem(this.id);
  }

  doneItem() {
    this.itemService.doneItem(this.id);
    this.router.navigate(['']);
  }

}
