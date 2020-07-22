import React from "react";
import Item from "./Item"
export default function Input({tasks=[], onClickDeleteTask}){
    return (
        <div>
            <ul>
                {tasks.map(task => <Item key={task.id} task={task} onClickDeleteTask={onClickDeleteTask}/>)}
            </ul>
        </div>
    )
}