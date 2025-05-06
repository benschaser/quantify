import { v4 as uuidv4 } from "uuid";

export default class Division {
    public id: string = uuidv4();
    public code: string = "00";
    public name: string = "New Division";
    public items: any[];
    constructor(id=uuidv4(), code="00", name="New Division", items: any[]) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.items = items;
    }

    /**
     * @returns Deep copy of the division object.
     */
    public copy() {
        return new Division(uuidv4(), this.code, this.name, this.items);
    }
    /**
     * Revives a JSON object back into a Division object.
     * @param object - JSON object
     */
    public revive(object) {
        if (object.id) this.id = object.id;
        this.code = object.code;
        this.name = object.name;
        this.items = object.items;
    }

}

/**
 * Revives a JSON object back into a Division object.
 * @param object - JSON object
 * @returns Division object
 */
export const revive = (object) => {
    return new Division(object.id, object.code, object.name, object.items);
}