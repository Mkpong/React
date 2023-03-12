import react from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from 'axios';

function NewTeam() {

    const navigate = useNavigate();

    const [name , setName] = useState("")

    const onChange = (e) => {
        setName(e.target.value);
    }

    const create = () => {
        console.log(name);
        
        axios.post("/api/team/create" , ({
            name: name
        }))
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

        navigate("/team")
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Create Team</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" onChange={onChange}/>
                </Form.Group>
            </Form>
            <Button variant="outline-primary" onClick={() => {
                create();
            }}>Create</Button>{' '}
        </div>
    );
}

export default NewTeam;