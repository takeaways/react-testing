import React from "react";
export default function Input({onClick, onChange, value}){
    return (
        <p>
            <label htmlFor={"inputTask"}>NewTask</label>
            <input id={"inputTask"} type="text" placeholder={"할일을 입력해주세요."} value={value} onChange={onChange}/>
            <button type={"submit"} onClick={onClick}>Add</button>
        </p>
    )
}