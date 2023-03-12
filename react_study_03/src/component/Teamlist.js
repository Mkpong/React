import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Teamlist() {

    const [teams , setTeams] = useState([]);

    const teamlist = teams.map((team) => (
        <tr key={team.id}>
            <td>{team.id}</td>
            <td><Link to={`/team/view/${team.id}`}>{team.name}</Link></td>
            <td>0</td>
            <td>
                <Button variant="primary" onClick={() => {
                    registerteam(team.id)
                }}>Register</Button>
            </td>
        </tr>
    ))

    const registerteam = (id) => {
      axios.post(`/api/team/register/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get("/api/team/list")
        .then(response => setTeams(response.data))
        .catch(error => console.log(error))
    } , [])




    return (
        <div>
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>TeamName</th>
              <th>Member Number</th>
              <th>Register</th>
            </tr>
          </thead>
          <tbody>
            {teamlist}
          </tbody>
        </Table>
        <Button variant="primary" href='/team/create'>NewTeam</Button>
        </div>
      );

}

export default Teamlist;