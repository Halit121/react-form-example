import './App.css';
import { Formlar } from './Companents/form';
import TaskList from './Companents/TaskList';
import { useState } from 'react';



function App() {
  const [tasks, setTasks] = useState([])

  const createTaske = (title,taskDesc) => {
 const createdTasks=[
 ...tasks,{         // soldaki 3 nokta eskileri kopyalıyo yeni array oluşturuyor

    id:Math.round(Math.random()*999999),
    title, //soldaki key değeri ve value değeri
    taskDesc,

  }
 ];
 
 setTasks(createdTasks);
  };

const deleteTaskById=(id)=>{
 const afterDeletingTasks= tasks.filter((task)=>{
    return task.id !==id;
  })
  setTasks(afterDeletingTasks);
}



const editTaskById=(id,updatedTitle,updatedTaskDesc)=>{
  const updatedTasks= tasks.map((task)=>{
    if(task.id===id){
      return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }
     return task
   })
   setTasks(updatedTasks);
 }

  return (
    <div className="App">    
<Formlar onCreate={createTaske}/> 
<h1>Görevlerim</h1>
<TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>

 
    </div>
  );
}

export default App;
