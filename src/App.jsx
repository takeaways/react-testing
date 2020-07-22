import React, { useState } from 'react';
import Input from "./Input";
import List from "./List"



export default function App() {

    function onClick(){
        //할일추ㅣ
    }
    const tasks =[{id:1,title:'noting to do'},{id:2,title:'noting to do'}]

    return (
       <div>
           <h1>To-Do</h1>
           <Input onClick={onClick}/>
           <List tasks={tasks}/>
       </div>

    );
}