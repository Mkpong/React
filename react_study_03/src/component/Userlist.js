import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Userlist(){

    const [user , setUser] = useState([]);

    const userlist = user.map((users) => (
        <tr key={users.id}>
            <td>{users.id}</td>
            <td><Link to={`/user/view/${users.id}`}>{users.username}</Link></td>
            <td>{users.team ? (users.team.name) : "Not Team"}</td>
        </tr>
    ))

    useEffect(() => {
        axios.get('/api/user/list')
        .then(response => {
            setUser(response.data)
        })
        .catch(error => console.log(error))
    } , [])

    return (
        <div>
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {userlist}
          </tbody>
        </Table>
        </div>
      );


}

export default Userlist;