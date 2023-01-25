import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outgoing';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outgoing';
} 

export const TransactionsContext = createContext<TransactionsContextType>({} as TransactionsContextType);

interface TransactionProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order:'desc',
        q: query
      }
    })
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const {description, price, category, type} = data;
    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })
  }

  // fetch all transactions
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}