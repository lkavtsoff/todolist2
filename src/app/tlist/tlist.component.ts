import { Component, OnInit } from '@angular/core';

import { ItemService } from '../todolist.service';
import { Item } from '../item';

@Component({
  selector: 'tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css'],
  //providers: [ItemService]
})

export class TlistComponent implements OnInit {

  items: Item[] = [];
  constructor (private itemService: ItemService) {}

  ngOnInit() {
      this.items = this.itemService.getItems();
  }

  addItem(name: string, details: string) {
      this.itemService.addItem(name, details);
  }

  highlightItem(element) {
      this.itemService.highlightItem(element);
  }

}
