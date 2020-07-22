import React, { useState } from 'react';
import Page from "./Page"

export default function App() {
    const [state, setState] = useState({
        newId:100,
        taskTitle:'',
        tasks:[{id:1,title:'noting to do'},{id:2,title:'noting to do'}]
    })

    const {tasks,newId, taskTitle} = state;

    function handleClickAddTask(){
        setState({
            newId: newId+1,
            taskTitle: '',
            tasks: [...tasks, {id:newId, title: taskTitle}]
        })
    }

    function handleChangeTitle(event){
        setState({
            ...state,
            taskTitle: event.target.value
        })
    }

    function handleClickDeleteTask(id){
        setState({
            ...state,
            tasks: tasks.filter(task => task.id !==id)
        })
    }

    return (
      <Page
          tasks={tasks}
          taskTitle={taskTitle}
          onClick={handleClickAddTask}
          onChange={handleChangeTitle}
          onClickDeleteTask={handleClickDeleteTask}
      />
    );
}