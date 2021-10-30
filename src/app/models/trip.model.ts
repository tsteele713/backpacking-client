import { Expenses } from "./expenses.model";
import { User } from "./users.model";

export interface Trip {
    seqId: string;
    name: string;
    departureDate: string;
    initialTransportationType: string;
    destinationAirport?:  string;
    returnDate?: string;
    companions?: User[];
    expenses?: Expenses[];
    description?: string;

}