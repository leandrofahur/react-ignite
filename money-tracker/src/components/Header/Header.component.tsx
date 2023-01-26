import * as Dialog from '@radix-ui/react-dialog'
import Logo from '../../assets/igniteLogo.svg'
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal.component'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './Header.styled'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
