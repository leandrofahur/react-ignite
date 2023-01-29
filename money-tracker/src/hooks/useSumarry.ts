import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/Transactions.context'

export function useSumary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += acc.income
        } else {
          acc.outgoing += transaction.price
          acc.total -= acc.outgoing
        }
        return acc
      },
      {
        income: 0,
        outgoing: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
