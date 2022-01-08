import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons'
import { nanoid,customAlphabet } from 'nanoid'
import TodoItem from "./TodoItem";

const Todo = () => {
    const [tasks,setTasks]=useState([
        {id:1,title:'Buy coffee'},
        {id:2,title:'Buy book'},

    ])
    const [value,setValue]=useState('')

    const handleInput = (e) =>{
        setValue(e.target.value)
    }
    const addTasks = () =>{
        const nanoId = customAlphabet('1234567890',5)
        const newTask={
            id:nanoId(),
            title:value,
            createAt: + new Date()
        }
        setTasks([...tasks, newTask])
        setValue('')
    }
    const deleteTask = (id) =>{
        setTasks(tasks.filter((item)=>{
            return item.id !== id
        }))
    }
    const saveTask = (id, newTitle) => {
        setTasks(tasks.map(el => el.id === id ? {...el, title: newTitle} : el))
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4 my-5'>
                    <div className='d-flex'>
                        <input type="text" className={'form-control border-dark'} value={value} onChange={handleInput}/>
                        <button className='btn btn-primary ms-2'
                                onClick={addTasks}
                                disabled={!value.trim()}
                        >Добавить</button>

                    </div>
                    <ul className='list-group my-2'>
                        {
                            tasks.map((el,idx) =>(

                                <TodoItem key={idx} el={el} idx={idx} deleteTask={deleteTask} saveTask={saveTask}/>

                            ))
                        }
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Todo;