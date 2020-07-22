import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Input from "./Input";

import {
    addTask,
    updateTaskTitle,
} from "./actions";


export default function InputContainer() {
    const dispatch = useDispatch();
    const taskTitle = useSelector(state=>state.taskTitle);

    function handleClickAddTask() {
        dispatch(addTask())
    }

    function handleChangeTitle(event) {
        dispatch(updateTaskTitle(event.target.value));
    }

    return (
        <Input
            onClick={handleClickAddTask}
            onChange={handleChangeTitle}
            value={taskTitle}
        />
    );
}