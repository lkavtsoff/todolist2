export class Item {
    id: number;
    done: boolean;
    name: string;
    details: string;
    constructor (id: number, done: boolean, name:string, details: string) {
        this.id = id;
        this.done = done;
        this.name = name;
        this.details = details;
    }
}
