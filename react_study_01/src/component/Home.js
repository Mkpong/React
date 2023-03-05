import React, { useEffect , useState} from 'react';
import axios from 'axios';


function Home() {

    const [test , setTest] = useState("Home");

    useEffect(() => {
        axios.get('/api/user') //localhost:8080/api/test 에 data요청
        .then(response => setTest(response.data)) //response로 data가 넘어옴 -> test에 data넣음
        .catch(error => console.log(error)) //오류 발생시 예외처리
    })

    return (
        <div><h1>{test}</h1></div>
    )
}

export default Home;