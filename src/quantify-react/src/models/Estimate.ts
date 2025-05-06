import { v4 as uuidv4 } from "uuid";

export default class Estimate {
    public readonly id: string = uuidv4();
    public classificationId: string;
    public name: string;
    public status: "saved" | "loading" | "error" | "none";
    public data: any[] = [];

    constructor(id=uuidv4(), classificationId="", name="New Estimate", status="none") {
        this.id = id;
        this.classificationId = classificationId;
        this.name = name;
        if (status === "saved" || status === "loading" || status === "error" || status === "none") this.status = status;
    }
    /**
     * Sets the status of the estimate file.
     */
    withStatus(status: "saved" | "loading" | "error" | "none"): Estimate {
        return new Estimate(this.id, this.classificationId, this.name, status);
    }
    /**
     * Sets the data template of the estimate.
     * @param template - A deep cloned array of divisions.
     */
    setTemplate(template: any[]) {
        this.data = template;
    }
}



