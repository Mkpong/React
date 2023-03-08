import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Note(){
    
    
    const [note , setNote] = useState([]);
    const notelist = note.map((notes) => (
            <li key={notes.id}><Link to={`/note/view/${notes.id}`}>{notes.id}</Link></li>
    ))

    useEffect(() => {
        axios.get('/api/note/list')
        .then((response)=>{
            setNote(response.data);
        })
        .catch((error)=>console.log(error))
    }, [])

    return(
        <div>
            {notelist}
        </div>
    ) 
}

export default Note;