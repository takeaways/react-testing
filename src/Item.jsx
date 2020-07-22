import React from "react";

export default function Item({task}){
    return (
        <li>
            <div>
                <h1>{task.title}</h1>
            </div>
        </li>
    )
}