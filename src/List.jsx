import React from "react";
import Item from "./Item"
export default function Input({tasks=[]}){
    return (
        <div>
            <ul>
                {tasks.map(task => <Item key={task.id} task={task}/>)}
            </ul>
        </div>
    )
}