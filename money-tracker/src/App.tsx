import { Transactions } from './pages/Transactions/Transactions.component'
import { TransactionsProvider } from './contexts/Transactions.context'

export function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}
