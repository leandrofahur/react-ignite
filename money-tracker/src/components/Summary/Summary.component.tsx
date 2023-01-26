import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './Summary.styled'
import { priceFormatter } from '../../utils/formatter'
import { useSumary } from '../../hooks/useSumarry'

export function Summary() {
  const summary = useSumary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>
          {'+'}
          {priceFormatter.format(summary.income)}
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outgoings</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {'-'}
          {priceFormatter.format(summary.outgoing)}
        </strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
