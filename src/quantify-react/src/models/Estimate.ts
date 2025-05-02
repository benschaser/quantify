import { v4 as uuidv4 } from "uuid";

export class Estimate {
    constructor(
        public id: string = uuidv4(),
        public name: string = "New Estimate",
        public status: "saved" | "loading" | "error" = "loading",
        public data: [],
    ) {}

    withStatus(status: "saved" | "loading" | "error"): Estimate {
        return new Estimate(this.id, this.name, status, this.data);
    }
}

export class EstimateDataGroup {
    constructor(
        public code: string = "00 00 00 00",
        public name: string = "",
        public items: [],
    ) {}
}