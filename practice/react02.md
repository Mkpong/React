# URL로 페이지에 값 전달하기
- URL에 값을 전달해 주어야 할때 parameter을 사용하는 방법과 쿼리문을 사용하는 방법이 있다.

<br/>

## 1. Parameter을 사용해 전달하기

우리가 평소에는 props를 이용하여 매개변수를 전달하지만, Route를 사용할때는 URL에 실어서 보내야 할 때도 있다.
이때는 URL에 parameter을 실어서 컴포넌트를 열어줄 수 있다.

<br/>

### 1. Route에서 전달받을 parameter명 설정

평소에 그냥 path를 설정할 때와는 다르게 :parameter명 을 사용한다.

`<Route exact path="/note/view/:id" element={<NoteView />}></Route>`

<br/>

### 2. Link등을 통해 url을 호출할때 ${}으로 매개변수를 전달해 준다.

`<Link to={`/note/view/${notes.id}`}>{notes.id}</Link></li>`

**★여기서 중요한 점★**
- JS에서는 URL 즉, 문자열 내에 변수를 넣어 전달하고 싶다면 작음따옴표나 쌍따옴표가 아닌 ` 을 통해 URL을 묶어줘야한다.
- \`.../${}`

해당 문제 때문에 변수 인식이 안되어 계속 고민함 ㅠㅠ

<br/>

### 3. 전달한 Parameter을 Component에서 받아 사용

react-router-dom 의 useParams를 이용할 수 있다.

`const {name} = useParams();`

이렇게 되면 2번에서 전송한 notes.id가 name에 저장되는 것으로 값을 전달해 줄 수 있다.

그외에도 match를 사용하여 전달받은 parameter을 불러올 수 있다.

<br/><br/>

## 2. Qurery문을 사용해 전달하기


