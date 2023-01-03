import { Play } from 'phosphor-react'
import {
  FormContainer,
  HomeContainer,
  CountDownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinuteAmountInput,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput id="task" placeholder="Name your task" />
          <label htmlFor="minutesAmount">for</label>
          <MinuteAmountInput
            type="number"
            id="minutesAmount"
            placeholder="0:0"
          />
          <span>minutes</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
