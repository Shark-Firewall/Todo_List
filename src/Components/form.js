import React, { useState } from "react";
import "../App.css"

function Form(){

    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([]);

    const addTask =() =>
    {
        if(task !== ""){
            const taskDetails={
                id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false,
            };
            setTodo([...todo, taskDetails]);
        }
    };

    console.log("tasklist",todo);

    const deleteTask=(e,id)=>{
        e.preventDefault();
        setTodo(todo.filter((t)=>t.id !=id));
    };
    
    const doneTask=(e,id)=>{
        e.preventDefault();
        const element = todo.findIndex(elem=>elem.id==id);
        
        const newTodo=[...todo];
        newTodo[element]={
            ...newTodo[element],
            isCompleted:true,
        }
        setTodo(newTodo);
    }
    return(
        <div>
            <h2>Add Todo</h2>
            <input 
                type="text"
                value={task}
                onChange={e=>{
                    setTask(e.target.value)
                }}
            />
            <button onClick={addTask}>Submit</button>
            <div className="list">
                {
                    (todo !== [])?(
                        <ul>
                            {
                            todo.map((t)=>(
                                <li className={t.isCompleted?"DoneText":"ListText"} key={t.id}>
                                    {t.value}
                                    <button
                                        onClick={(e)=>deleteTask(e,t.id)
                                        }>
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e)=>doneTask(e,t.id)}
                                        >
                                        Completed
                                    </button>
                                </li>
                            ))
                            }
                        </ul>
                    ):null
                }
            </div>
        </div>

    );
}

export default Form;