import react, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Teamview() {

    const {id} = useParams();

    const [members , setMembers] = useState([]);

    const getteam = () => {

        console.log("TEAMVIEW open");
        axios.get(`/api/team/view/${id}`)
        .then(response => setMembers(response.data))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getteam();
    } , [])

    const navigate = useNavigate();

    const memberdelete = (memberid) => {
        console.log(memberid);
        axios.post(`/api/member/delete/${memberid}/${id}`)
        .then(response => getteam())
        .catch(error => console.log(error));
    }

    const memberlist = members.map((member) => (
        <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.username}</td>
            <td>
                <Button variant="primary" onClick={() => {
                    memberdelete(member.id);
                }} type='button'>delete</Button>
            </td>
        </tr>
    ))





    return (
        <div>
            <Table striped="columns">
            <thead>
                <tr>
                <th>Member_ID</th>
                <th>Member_name</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {memberlist}
            </tbody>
            </Table>
            <Button variant="primary" onClick={() => {
                axios.post(`/api/team/delete/${id}`)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))

                navigate("/team")
            }}>Team Delete</Button>
        </div>
    );
}

export default Teamview;