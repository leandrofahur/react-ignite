import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay } from './NewTransactionModal.styled'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form action=''>
          <input type="text" placeholder='Description' required/>
          <input type="number" placeholder='Amount' required/>
          <input type="text" placeholder='Category' required/>

          <button type='submit'>Register</button>
        </form>
        <Dialog.Close />
      </Content>

    </Dialog.Portal>
  )
}