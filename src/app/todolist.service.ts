import { Item } from './item';

export class ItemService {
    items: Item[] = [
        { name: 'M14A1' },
        { name: 'Smith Wesson 4506' },
        { name: 'Springfield Armory EMP 4' },
        { name: 'Colt M19A11' }
    ];

    getItems(): Item[] {
        return this.items;
    }
    
    addItem(name: string) {
        this.items.push(new Item(name));
    }

    highlightItem(element) {
        element.selected = true;
    }

}