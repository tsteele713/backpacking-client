import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Friend } from "../models/friends.model";
import { ChecklistItem } from "../models/checklist-item.model";
import { Expenses, TripExpenses } from "../models/expenses.model";

@Injectable()
export class ExpensesService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getExpenses(): TripExpenses{
        return {
            groupTotal: '123.93',
            personalTotal: '55.63',
            expenses:[
                {
                    seqId: '12345',
                    type: 'Group',
                    amount: 34.50,
                    description: 'Fuel',
                    expenseCreator: 'Tyler Steele'
                },
                {
                    seqId: '12345',
                    type: 'Personal',
                    amount: 10.50,
                    description: 'Monster'
                },
                {
                    seqId: '12345',
                    type: 'Personal',
                    amount: 10.50,
                    description: 'Monster'
                },
                {
                    seqId: '12345',
                    type: 'Personal',
                    amount: 10.50,
                    description: 'Monster'
                },
                {
                    seqId: '12345',
                    type: 'Group',
                    amount: 10.50,
                    description: 'Monster',
                    expenseCreator: 'Branden Bellanca'
                },
                {
                    seqId: '12345',
                    type: 'Personal',
                    amount: 10.50,
                    description: 'Monster'
                },
            ]
    }
    }


}