import Logo from '../../assets/igniteLogo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Header.styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}