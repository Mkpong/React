import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

function LoginComp(props){

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const [logcheck , setLogcheck] = useState(false);


    //json 형태의 data -> form 형태로 변경
    const axiosConfig = {
        headrs:{
            "Content-Type": "applicaion/x-www-form-urlencoded"
        }
    }

    const navigate = useNavigate();

    const login = () => {
        console.log(username);
        axios
            .post('/api/login' , qs.stringify({
                username: username,
                password: password
            }), axiosConfig)
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => console.log(error))

        // axios
        //     .get('/api/logcheck')
        //     .then((response) =>{
        //         setLogcheck(response.data)
        //     })
        //     .catch(error => console.log(error));

        // if(logcheck){
        //     return navigate("/");
        // }
        return navigate("/");
    }

    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    return (
        <div className = "page">
            <div className= "titleWrap">
                로그인
                <br/>
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>
            <div className='contentWrap'>
                <div className='inputTitle'>{props.ID}</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='Dankook@dankook.ac.kr' name='email' type={'String'} onChange={onUsernameHandler}/>
                </div>
                <div className='inputTitle'>{props.PW}</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='영문, 숫자, 특수문자 포함 8자 이상' name='password' type={'password'} onChange={onPasswordHandler}/>
                </div>
            </div>
            <div>
                <button className='bottomButton' onClick={function(){
                    login();
                }}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default LoginComp;