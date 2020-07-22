import React from "react";
export default function Input({onClick}){
    return (
        <p>
            <input type="text" placeholder={"할일을 입력해주세요."}/>
            <button type={"submit"} onClick={onClick}>Add</button>
        </p>
    )
}