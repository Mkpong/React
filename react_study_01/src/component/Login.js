import React from 'react';

function Login(props){
    return (
        <div className = "page">
            <div className= "titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>
            <div className='contentWrap'>
                <div className='inputTitle'>{props.ID}</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='Dankook@dankook.ac.kr' name='email' type={'String'}/>
                </div>
                <div className='inputTitle'>{props.PW}</div>
                <div className='inputWrap'>
                    <input className="input" placeholder='영문, 숫자, 특수문자 포함 8자 이상' name='password' type={'password'}/>
                </div>
            </div>
            <div>
                <button className='bottomButton' onClick={function(event){
                    event.preventDefault();
                    props.onChangeMode();
                }}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default Login;