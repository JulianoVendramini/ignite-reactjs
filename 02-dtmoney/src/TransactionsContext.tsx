import { createContext, useEffect, useState, ReactNode} from 'react';
import { api } from './services/api';

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
  }, [])

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction)
  }

  return(
      <TransactionsContext.Provider value={{ transactions, createTransaction }}>
          {children}
      </TransactionsContext.Provider>
  )
}