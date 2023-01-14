
import { useContext } from "react"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./Summary.styled"
import { TransactionsContext } from "../../contexts/Transactions.context"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>$17,400.00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outgoings</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>$17,400.00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>$17,400.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}