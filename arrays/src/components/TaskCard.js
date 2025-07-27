


export const TaskCard = ({task, handleDelete, info}) => {
  return (
    
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span> {task.id} - {task.name} - {task.completed} - {info} </span>
        <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  )
}
