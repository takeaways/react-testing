import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Page from "./Page";

function updateTaskTitle(taskTitle) {

    return {
        type: 'updateTaskTitle',
        payload: {
            taskTitle
        }
    }
}

function addTask() {
    return {
        type: 'addTask'
    }
}

function deleteTask(id) {
    return {
        type: 'deleteTask',
        payload: {
            id
        }
    }
}

export default function App() {

    const dispatch = useDispatch();

    const {tasks, taskTitle} = useSelector(state => ({
        tasks: state.tasks,
        taskTitle: state.taskTitle
    }));

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