# Axios
- 서버와 React가 Data를 주고받기 위해 사용

## 1. Axios 설정방법

1. 터미널에서 src 폴더에 설치 진행

> npm install axios

2. 사용하고자 하는 곳에서 impot 진행

> import axios from 'axios';

## 2. Axios의 함수
### 2.1 Axios.get()

**문법**
> axios.get('url' , [,config])

-get은 해당 url에 data를 요청할때 사용한다.

**get 예제코드**

```
import axios from 'axios'

const [test , setTest] = useState("basic");

useEffect(() => {
    axios.get('/api/test') //localhost:8080/api/test 에 data요청
    .then(response => setTest(response.data)) //response로 data가 넘어옴 -> test에 data넣음
    .catch(error => console.log(error)) //오류 발생시 예외처리
})
```

### 2.2 Axios.post()

**문법**
> axios.post('url' , data_object , [,config])

- post 요청을 사용하면 get과는 다르게 주소창에 data정보가 노출되지 않으므로 get보다 안전하다
- 주로 회원가입, 로그인등 보안이 유지되어야 하는 정보를 전달할때 사용한다.

**post 예제 코드**
```
const [username , setUsername] = useState("");
const [password , setPassword] = useState("");


const register = () => {
    axios
        .post('/api/register' , { //api에 요청할 url
            username: username,
            password: password  //api에 전달할 data 객체
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => console.log(error)) //error 예외처리
}
```
