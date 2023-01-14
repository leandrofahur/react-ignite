import { useContext } from "react";
import { Header } from "../../components/Header/Header.component";
import { Summary } from "../../components/Summary/Summary.component";
import { TransactionsContext } from "../../contexts/Transactions.context";
import { SearchForm } from "./components/SearchForm.component";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./Transactions.styled";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outgoing';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {
              transactions.map(transaction => {
                const { id, description, price, type, category, createdAt } = transaction;

                return (
                  <tr key={id}>
                    <td width="50%">{description}</td>
                    <td><PriceHighlight variant={type}>${price}</PriceHighlight ></td>
                    <td>{category}</td>
                    <td>{createdAt}</td>
                  </tr>)
              }
              )
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}