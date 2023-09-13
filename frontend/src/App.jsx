import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [taskValue, setTaskValue] = useState("")
  const [taskList, setTaskList] = useState([])

  const submitTask = () => {
    if (taskValue !== '') {
      setTaskList([...taskList, taskValue]);
      setCount(count + 1);
      setTotalCount(totalCount + 1);
      setTaskValue('');
    }
  }

  const handleTaskClick = (event) => {
    const style = event.target.style;

    if(style.textDecoration){
      style.removeProperty('text-decoration');
      setCount(count + 1);
    }
    else{
      style.setProperty('text-decoration', 'line-through');
      setCount(count - 1);
    }
  }

  return (
    <>
      <p>Active Tasks: {count} , Total Count: {totalCount}</p>
      <input type='text' value={taskValue} onChange={(event) => setTaskValue(event.target.value)}></input>
      {' '}
      <button type='submit' onClick={submitTask}>Submit</button>

      <table>
        <thead>
          <tr>
            <th>Task Name</th>
          </tr>

        </thead>
        <tbody>
          {
            taskList.map((task, idx) => (
              <tr key={idx} onClick={handleTaskClick}>
                <td>{task}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  )
}

export default App
