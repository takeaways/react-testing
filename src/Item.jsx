import React from "react";

export default function Item({task, onClickDeleteTask}){
    return (
        <li>
            <div>
                <h1><span>{task.id}.</span>{task.title}</h1>
                <button onClick={()=>{onClickDeleteTask(task.id)}}>Delete</button>
            </div>
        </li>
    )
}