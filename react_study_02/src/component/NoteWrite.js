import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function NoteWrite(){

    const navigate = useNavigate();

    const [inputs , setInputs] = useState({
        title: '',
        content: ''
    })

    const write = () =>{

        axios.post("/api/note/add" , inputs)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.log(error))

        // return navigate("/Note");
    }

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value,
        });
    }

    return(
        <div>
            <h1>NoteWrite</h1>
            <div>
                <label>title</label>
                <input type="text" id="title" onChange={onChange} />
            </div>
            <div>
                <label>content</label>
                <textarea type="text" id="content" onChange={onChange} />
            </div>
            <button onClick={function(){
                write();
            }}>작성</button>
        </div>
    )
}

export default NoteWrite;