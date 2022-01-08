import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash,faCheck, faMinus} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({el, idx, deleteTask, saveTask}) => {
    const [editable, setEditable] = useState(false)
    const [newtitle, setNewtitle] = useState(el.title)
    const changeEditable = () => {
        setEditable(!editable)
    }
    const handleNewTitle =(e) => {


        setNewtitle(e.target.value)
    }
    const handleSave = () => {
        saveTask(el.id, newtitle)
        setEditable(false)

    }
    const cancelEdit = () => {
        setNewtitle(el.title)
        setEditable(false)
    }
    function handleSelect(e){
        e.target.select();
    }

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${editable ? "bg-dark": "text-dark"} `} key={el.id}>


            {
                editable ? <input type="text" className="form-control me-2" onClick={handleSelect} defaultValue={el.title}
                                  onChange={handleNewTitle}/> : <span>  {idx + 1}.{el.title}</span>
            }

            <span className="d-flex">
                                    <button className='btn btn-outline-warning me-2'  disabled={!newtitle.trim()} type='button'
                                            onClick={editable ? handleSave: changeEditable}
                                    >
                                        {
                                            editable ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faEdit}/>
                                        }
                                    </button>
                                    <button className='btn btn-outline-danger' onClick={editable ? cancelEdit : () => deleteTask(el.id)}
                                            type='button'
                                    >{editable ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faTrash}/>}</button>
                                </span>
        </li>
    );
};

export default TodoItem;