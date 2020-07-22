import React, {useState} from 'react';
import Input from "./Input";
import List from "./List"


export default function Page({onClick, tasks, taskTitle, onChange}) {

    return (
        <div>
            <h1>To-Do</h1>
            <Input
                onClick={onClick}
                onChange={onChange}
                value={taskTitle}/>
            <List tasks={tasks}/>
        </div>

    );
}