
import './App.css';

import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {id: 527, name: "Record React Lectures", completed: true},
    {id: 600, name: "Edit React Lectures", completed: false},
    {id: 627, name: "Watch React Lectures", completed: false}
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }


  return (
    <div className="App">
      <h1> Task List </h1>
      <ul>

        <button className='trigger' onClick={() => setShow(!show)}> Toggle </button>

        { show && tasks.map(({id, name, completed}, index) => (
          // if show is true, then tasks are displayed

          // accessing the task name
                                        

            <li key={id} className={completed ? "completed" : "incomplete"}>
              <span> {id} - {name} - {completed} </span>
              <button onClick={() => handleDelete(id)} className='delete' > Delete </button>
            </li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
