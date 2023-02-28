import React, { useEffect , useState} from 'react';
import axios from 'axios';


function Home() {

    const [test , setTest] = useState("basic");

    useEffect(() => {
        axios.get('/api/test')
        .then(response => setTest(response.data))
        .catch(error => console.log(error))
    })

    return (
        <div>{test}</div>
    )
}

export default Home;