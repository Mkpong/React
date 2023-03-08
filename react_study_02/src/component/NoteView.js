import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import {useParams , useNavigate} from 'react-router-dom';

function NoteView(){
    const [note , setNote] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`/api/note/view/${id}`)
        .then((response) => setNote(response.data))
        .catch((error) => console.log(error))
    } ,[])

    return (
        <div>
            <li>ID : {note.id}</li>
            <li>Title : {note.title}</li>
            <li>Content : {note.content}</li>
            <button onClick={() => {
                navigate("/note");
            }}>목록</button>
        </div>
    )

}

export default NoteView;