# JSX
### jsx란 .js파일에서 html을 대신하기 위해 개발된 언어
- 대부분의 문법은 비슷하지만 다르게 사용하는 경우들이 존재하기때문에 아래에 정리

- **HTML과 JSX의 차이**

|HTML/CSS|JSX|Remarks|
|:--:|:--:|:--:|
|class|className|-|
|style=""|style={{}}|{style: 'value'}|
|onClick=""|onClick={}|{function}|
|font-size|fontSize|-|


- **JSX 문법**
   - 변수를 넣을때에는 { 변수명 } 으로 사용(Data-Binding)

- **주의 사항**
   - .js에서 return ()에서는 한 태그안에 모두 작성해야 한다.<br>(병렬로 2개이상의 태그X / 한 태그안에 다른 태그들은 작성가능)
