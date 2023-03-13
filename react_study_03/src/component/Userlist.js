import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

function Userlist(){

    const [user , setUser] = useState([]);

    const deleteuser = (id) => {
      axios.post(`/api/user/delete/${id}`)
      .then(response => console.log("delete user"))
      .catch(error => console.log(error));
    }

    const userlist = user.map((users) => (
        <tr key={users.id}>
            <td>{users.id}</td>
            <td>{users.username}</td>
            <td>{users.team ? (users.team.name) : "NOT"}</td>
            <td>
            <Button variant="primary" onClick={() => {
                    deleteuser(users.id)
            }}>delete</Button>
            </td>
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
              <th>Delete</th>
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