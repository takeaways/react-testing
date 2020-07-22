import React from "react";

export default function Item({task}){
    return (
        <li>
            <div>
                <h1><span>{task.id}.</span>{task.title}</h1>
            </div>
        </li>
    )
}