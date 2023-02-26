# Props

## 1. Props를 사용하는 이유
- 만들어둔 컴포넌트들을 여러 방면에서 재사용하기 위해 사용

## 2. Props를 사용하는 방법

### 2.1 하나의 객체를 전달받아 사용
1. 함수에 전달받을 객체를 설정한다. (변수명으로는 대부분 props를 사용)

```
function Login(props){
    return ();
}
```

2. 컴포넌트를 사용할때 변수에 넘겨줄 객체의 정보를 포함하여 사용한다.

`<Login ID="이메일을 입력해 주세요" PW="비밀번호를 입력해 주세요"></Login>`

3. 사용하고자 하는 위치에 props.xxx 를 사용한다. (react에서는 변수를 받을때 반드시 {}로 묶어줘야함)

`<div className='inputTitle'>{props.title}</div>`

- 이렇게 하면 내가 원하는 상황에 따라 컴포넌트를 수정하지 않고도 원하는 변수로 컴포넌트를 사용할 수 있다

## 2.2 배열의 형태의 객체를 전달받아 사용
1. 함수에 전달받을 객체를 설정

`function Nav(props){ return (); }`

2. 배열을 컴포넌트를 불러오고자 하는곳에 선언

```
  const menu = [
    {title: "home" , path: "/"},
    {title: "login" , path: "/login"},
    {title: "holy" , path: "/"}
  ]
```

3. 컴포넌트를 선언할때 객체를 함께 전달

`<Nav menu={menu}></Nav>`

4. 여러가지 방법이 있지만 for문으로 리스트에 넣어 사용하는 방법이 있다.

```
function Nav(props){
    const menu = []
    for(let i=0 ; i<props.menu.length; i++){
        let box = props.menu[i];
        menu.push(<Link to={box.path} className="link">{box.title}</Link>)
    }
    return(
        <nav className='navbar'>
            {menu}
        </nav>
    );
}
```
