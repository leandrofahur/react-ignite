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
          <TaskInput
            id="task"
            placeholder="Name your task"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinuteAmountInput
            type="number"
            id="minutesAmount"
            placeholder="0:0"
            step={5}
            min={5}
            max={60}
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
