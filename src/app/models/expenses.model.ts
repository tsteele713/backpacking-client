export interface Expenses {
    seqId: string;
    type: 'Personal' | 'Group';
    amount: string;
    description: string;
    expenseCreator?: string;
}

export interface TripExpenses {
    groupTotal: string;
    personalTotal: string;
    expenses: Expenses[]
}