import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header/Header.component'
import { Summary } from '../../components/Summary/Summary.component'
import { TransactionsContext } from '../../contexts/Transactions.context'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm.component'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './Transactions.styled'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              const { id, description, price, type, category, createdAt } =
                transaction

              return (
                <tr key={id}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>
                      {transaction.type === 'outgoing' ? '- ' : '+ '}
                      {priceFormatter.format(price)}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
