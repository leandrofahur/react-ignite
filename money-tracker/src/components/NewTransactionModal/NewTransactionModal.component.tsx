import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './NewTransactionModal.styled'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={20} />
        </CloseButton>
        <form action=''>
          <input type="text" placeholder='Description' required />
          <input type="number" placeholder='Amount' required />
          <input type="text" placeholder='Category' required />

          <TransactionType>

            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>

            <TransactionTypeButton variant='outgoing' value='outgoing'>
              <ArrowCircleDown size={24} />
              Outgoing
            </TransactionTypeButton>

          </TransactionType>

          <button type='submit'>Register</button>
        </form>
      </Content>

    </Dialog.Portal >
  )
}