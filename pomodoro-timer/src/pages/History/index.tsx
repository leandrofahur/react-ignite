import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
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
            <tr>
              <td>Task 1</td>
              <td>21 minutes</td>
              <td>3 months</td>
              <td>
                <Status statusColor="green">Success</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>21 minutes</td>
              <td>3 months</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>21 minutes</td>
              <td>3 months</td>
              <td>
                <Status statusColor="green">Success</Status>
              </td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>21 minutes</td>
              <td>3 months</td>
              <td>
                <Status statusColor="red">Failed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
