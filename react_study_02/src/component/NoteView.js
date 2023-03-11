import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import {useParams , useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function NoteView(){
    const [note , setNote] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    const notedelete = () => {
        axios.get(`/api/note/delete/${note.id}`)
        .then((response) => console.log("삭제 성공"))
        .catch((error) => console.log(error))
        navigate("/note");
    }

    useEffect(()=> {
        axios.get(`/api/note/view/${id}`)
        .then((response) => setNote(response.data))
        .catch((error) => console.log(error))
    } ,[])

    return (
        <div> 
            <Table striped="columns" style={{textAlign: 'center'}}>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{note.id}</td>
                        <th>Date</th>
                        <td>2023-03-09</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{note.title}</td>
                        <th>Wirter</th>
                        <td>Jimmy</td>
                    </tr>
                    <tr>
                        <th colSpan={4} style={{textAlign: 'center'}}>Content</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>{note.content}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="outline-primary" onClick={() => {
                navigate("/note")
            }}>list</Button>{' '}
            <Button variant="outline-primary" onClick={() => {
                notedelete();
            }}>delete</Button>{' '}
        </div>
    )

}

export default NoteView;