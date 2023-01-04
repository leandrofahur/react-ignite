import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'
import { differenceInSeconds } from 'date-fns'

import {
  FormContainer,
  HomeContainer,
  CountDownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinuteAmountInput,
  StopCountdownButton,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Please enter a task'),
  minuteAmount: zod.number().min(5).max(60),
})

// interface NewCycleFormData {
//   task: string
//   minuteAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minuteAmount: number
  startDate: Date
  interruptedDate?: Date
}

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPast, setAmountSecondsPast] = useState<number>(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minuteAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let intervalId: number = 0

    if (activeCycle) {
      intervalId = setInterval(
        () =>
          setAmountSecondsPast(
            differenceInSeconds(new Date(), activeCycle.startDate),
          ),
        1000,
      )
    }

    return () => {
      clearInterval(intervalId)
      setAmountSecondsPast(0)
    }
  }, [activeCycle])

  function handleInterruptedCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const totalSeconds = activeCycle ? activeCycle.minuteAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `🍅 ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minuteAmount: data.minuteAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }
  // console.log(activeCycle)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput
            id="task"
            placeholder="Name your task"
            list="task-suggestions"
            {...register('task')}
            disabled={!!activeCycle}
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
            {...register('minuteAmount', { valueAsNumber: true })}
            disabled={!!activeCycle}
          />
          <span>minutes</span>
        </FormContainer>
        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptedCycle}>
            <HandPalm size={24} />
            Pause
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
