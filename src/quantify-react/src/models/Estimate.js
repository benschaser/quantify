import { v4 as uuidv4 } from "uuid";

export class Estimate {
    constructor({
        id = uuidv4(),
        name = "New Estimate"
    } = {}) {
        this.id = id;
        this.name = name;
    }
}