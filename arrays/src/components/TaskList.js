
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({title, subtitle, info}) => {

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

    <>
    <h1> Task List {title} {subtitle} </h1>
    <ul>

        <button className='trigger' onClick={() => setShow(!show)}> Toggle </button>

        { show && tasks.map((task) => (
            <TaskCard 
                key={task.id}
                info={info}
                task={task}
                handleDelete={handleDelete}
            />
                                        
        ))}
        
    </ul>

    <BoxCard result='success'>
        <p className='title'>Success ipsum </p>
        <p className='description'> Lorem </p>
    </BoxCard>

    <BoxCard result='warning'>
        <p className='title'> Lorem ipsum dolor sit.</p>
        <p className="description"> Lorem shit</p>
        <p> Lorem Lorem Lorem</p>
    </BoxCard>



    </>
  )
}
