import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Note(){
    
    
    const [note , setNote] = useState([]);
    const notelist = note.map((notes) => (
            <tr key={notes.id}>
              <td>{notes.id}</td>
              <td><Link to={`/note/view/${notes.id}`}>{notes.title}</Link></td>
              <td>2023-03-09</td>
            </tr>
    ))

    useEffect(() => {
        axios.get('/api/note/list')
        .then((response)=>{
            setNote(response.data);
        })
        .catch((error)=>console.log(error))
    }, [])

    return (
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notelist}
          </tbody>
        </Table>
      );

}

export default Note;