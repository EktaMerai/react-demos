import React, {useState,useRef} from 'react';

const Todo = () => {
     const refval = useRef(null);
     const [todolist,setTodoVal] = useState([])

     const todoList = () => {
        setTodoVal([...todolist,refval.current.value])
     }
    return (
        <>
        <h1>My Todo List</h1>
        <input type='text' ref={refval} />
        <button onClick={() => todoList()}>Add</button>
        <h2>List</h2>
        {todolist.map((item,index) => ( 
            <li key={index}>{item}</li>
        ))}
        </>
    )
}

export default Todo;