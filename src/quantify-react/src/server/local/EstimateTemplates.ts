import { v4 as uuidv4 } from "uuid";
import Division from '../../models/Division.ts';



const DIVISION_TEMPLATE_01 = [
    new Division(uuidv4(), "01", "General Conditions", []),
    new Division(uuidv4(), "02", "Equipment", [])
]