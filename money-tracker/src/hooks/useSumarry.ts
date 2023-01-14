import { useContext } from "react"
import { TransactionsContext } from "../contexts/Transactions.context"

export function useSumary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += acc.income
      }
      else {
        acc.outgoing += transaction.price
        acc.total -= acc.outgoing
      }
      return acc
    },
    {
      income: 0,
      outgoing: 0,
      total: 0
    }
  )

  return summary;
}