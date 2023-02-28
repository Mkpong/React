import React, {useState} from 'react';
import axios from 'axios';

function Register(){

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");


    const register = () => {
        axios
            .post('/api/register' , {
                username: username,
                password: password
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => console.log(error))
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
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>
            <form className='contentWrap'>
                <div className='inputTitle'>아이디를 입력하세요</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='Dankook@dankook.ac.kr' type={'String'} onChange={onUsernameHandler}/>
                </div>
                <div className='inputTitle'>비밀번호를 입력하세요</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='영문, 숫자, 특수문자 포함 8자 이상' type={'password'} onChange={onPasswordHandler}/>
                </div>
            </form>
            <div>
                <button className='bottomButton' onClick={function(){
                    register()
                }}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default Register;