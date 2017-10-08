import { Component, OnInit } from '@angular/core';

import { ItemService } from './todolist.service';
import { Item } from './item';

@Component ({
    selector: 'todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css'],
    providers: [ItemService]
})

export class TodoComponent {

    items: Item[] = [];
    constructor (private itemService: ItemService) {}

    ngOnInit() {
        this.items = this.itemService.getItems();
    }

    addItem(name: string) {
        this.itemService.addItem(name);
    }

    highlightItem(element) {
        this.itemService.highlightItem(element);
    }

}
