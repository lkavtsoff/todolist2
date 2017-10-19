import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()

export class ItemService {
    items: Item[] = [
        { id: 1, done: false, name: 'M14A1', details: 'Автоматическая винтовка M14A1 с пистолетной рукояткой, складной передней рукояткой, съемным компенсатором-пламегасителем и складными сошками применялась в качестве легкого ручного пулемета' },
        { id: 2, done: false, name: 'Smith Wesson 4506', details: 'В 1926 году с целью повышения служебно-эксплуатационных качеств и надежности пистолета M1911 была проведена небольшая модернизация' },
        { id: 3, done: false, name: 'Springfield Armory EMP 4', details: 'Springfield Armory анонсировала новый пистолет EMP 4, отличающийся от своего предшественника EMP удлинённым на 1 дюйм стволом и, соответственно, большей общей массой оружия.' },
        { id: 4, done: false, name: 'Colt M19A11', details: 'Пистолет Colt M1911 Rail Gun представляет собой дальнейшее развитие знаменитого самозарядного пистолета Colt M1911 конструкции Джона Браунинга.' }
    ];

    getItems(): Item[] {
        return this.items;
    }
    
    addItem(name: string, details: string) {
        let id: number = this.items.length + 1;
        this.items.push({id: id, done: false, name: name, details: details});
    }

    highlightItem(element) {
        element.selected = true;
    }

    getItem(id): any {
        return this.items[id - 1];
    }

    doneItem(id) {
        this.items[id - 1].done = true;
    }

}