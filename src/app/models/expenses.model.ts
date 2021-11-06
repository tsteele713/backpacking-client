export interface Expenses {
    seqId?: string;
    type: 'Personal' | 'Group' | '';
    amount: number | undefined;
    description: string;
    expenseCreator?: string;
}

export interface TripExpenses {
    groupTotal: string;
    personalTotal: string;
    expenses: Expenses[]
}