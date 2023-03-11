import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

        return navigate("/Note");
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
            <h1 style={{textAlign: 'center'}}>NoteWrite</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title" onChange={onChange} id="title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>TextArea</Form.Label>
                    <Form.Control as="textarea" type="text" onChange={onChange} rows={3} id="content" />
                </Form.Group>
            </Form>
            <Button variant="outline-primary" onClick={() => {
                write();
            }}>Write</Button>{' '}
        </div>
    )
}

export default NoteWrite;