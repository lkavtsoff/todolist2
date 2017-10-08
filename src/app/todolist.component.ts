import { Component } from '@angular/core';

import { Item } from './item';

@Component ({
    selector: 'todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})

export class TodoComponent {

    items: Item[] = [
        { name: 'M14A1' },
        { name: 'Smith Wesson 4506' },
        { name: 'Springfield Armory EMP 4' },
        { name: 'Colt M19A11' }
    ];

    addItem(name) {
        this.items.push(new Item(name));
    }

    highlightItem(element) {
        element.selected = true;
    }

}
