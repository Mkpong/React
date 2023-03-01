# Axios
- 서버와 React가 Data를 주고받기 위해 사용

## 1. Axios 설정방법

1. 터미널에서 src 폴더에 설치 진행

> npm install axios

2. 사용하고자 하는 곳에서 impot 진행

> import axios from 'axios';

## 2. Axios의 함수
### 2.1 Axios.get()

문법
> axios.get('url' , [,config])

-get은 해당 url에 data를 요청할때 사용한다.

get 예제코드

```
import axios from 'axios'

const [test , setTest] = useState("basic");

useEffect(() => {
    axios.get('/api/test') //localhost:8080/api/test 에 data요청
    .then(response => setTest(response.data)) //response로 data가 넘어옴 -> test에 data넣음
    .catch(error => console.log(error)) //오류 발생시 예외처리
})
```
