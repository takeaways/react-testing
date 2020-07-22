import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Page from "./Page";

import {
    addTask,
    deleteTask,
    updateTaskTitle,
} from "./actions";


const selector = (state)=>({
    tasks: state.tasks,
    taskTitle: state.taskTitle
})

export default function App() {

    const dispatch = useDispatch();

    const {tasks, taskTitle} = useSelector(selector);

    function handleClickAddTask() {
        dispatch(addTask())
    }

    function handleChangeTitle(event) {
        dispatch(updateTaskTitle(event.target.value));
    }

    function handleClickDeleteTask(id) {
        dispatch(deleteTask(id))
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