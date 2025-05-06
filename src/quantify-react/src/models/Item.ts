import { v4 as uuidv4 } from "uuid";

export default class Item {
    public readonly id: string = uuidv4();
    public code: string;
    public name: string;
    public description: string;
    public materialQuantity: number;
    public materialUnits: "EA" | "LF" | "SF";
    public materialUnitCost: number;
    public laborQuantity: number;
    public laborUnits: "HRS" | "DAYS";
    public laborUnitCost: number;

}