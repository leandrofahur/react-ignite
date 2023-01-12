import { Header } from "../../components/Header/Header.component";
import { Summary } from "../../components/Summary/Summary.component";
import { SearchForm } from "./components/SearchForm.component";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./Transactions.styled";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web development</td>
              <td><PriceHighlight variant="income">$12,000.00</PriceHighlight ></td>
              <td>Received</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Snacks</td>
              <td><PriceHighlight variant="outcome">- $59.00</PriceHighlight></td>
              <td>Paid</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}