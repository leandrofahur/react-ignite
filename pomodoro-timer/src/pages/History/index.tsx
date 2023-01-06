import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Beginning</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const {
                id,
                minutesAmount,
                startDate,
                task,
                finishedDate,
                interruptedDate,
              } = cycle
              return (
                <tr key={id}>
                  <td>{task}</td>
                  <td>{minutesAmount} minutes</td>
                  <td>{startDate.toISOString()} months</td>
                  <td>
                    {finishedDate && (
                      <Status statusColor="green">Success</Status>
                    )}
                    {interruptedDate && (
                      <Status statusColor="red">Disrupted</Status>
                    )}
                    {!finishedDate && !interruptedDate && (
                      <Status statusColor="yellow">On going</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
