import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export const Button = (props: ButtonProps) => {
  const { variant = 'primary' } = props

  return <ButtonContainer variant={variant}>Click Me!</ButtonContainer>
}
