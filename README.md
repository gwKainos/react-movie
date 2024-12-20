# react-movie

## 2-1. Before React
### Vanilla JS
1. HTML 생성
2. Javascript 가져오기
3. event 감지
4. 데이터 업데이트

## 2-2. Our First React Element
React JS: 어플리케이션을 interactive하게 만들어 주는 library.
react-dom : React element를 HTML에 두는 역활을 하는 library 또는 package.

### React 핵심
1. Javascript 생성, 업데이트
2. HTML에 노출.

### 기본 구조
React.createElement("span", {id: "sexy-span"}, "Hello i'm a span");
첫번째, HTML 태그
두번째, property
세번째, 내용

## 2-3. Event in React
어려운 방식으로 코드 작성 해보기.

## 2-4. Recap
### argument
첫번째, HTML 태그
두번째, props (property)
세번째, 내용

## 2-5. JSX
JSX : Babel을 통해 코드 변환

## 2-6. JSX part Two
* 직접 만든 요소는 전부 대문자로 시작(소문자로 할 경우 HTML의 요소 인식)
* Arrow function : = () => 을 사용할 것.

## 3-0. Understanding State
React에서 아래와 같이 호출을 해도 전체가 아닌 변경된 부분만 새로고침.
```react
function render() {
    ReactDOM.render(<Container/>, root);
}
```

## 3-1. setState part One
const [counter, modifier] = React.useState(0);
두개의 값을 받을 수 있음.
counter : 값
modifier : 함수

## 3-2. setState part Two
const [counter, setCounter] = React.useState(0);
const onClick = () => {
setCounter(counter + 1);
}

useState 함수에 + 1 값을 전달하여 카운팅 처리.

## 3-3. Recap

## 3-4. State Functions
setCounter(counter + 1) 대신 SetCounter((current) => current +  1)을 사용하여 현재값을 보장할 것.

## 3-5. Inputs and State

## 3-6. State Practice part One
onChange 역확 : 값 변경, UI에 보여주는 것

## 3-7. State Practice part Two
flip 기능 만들기

## 3-8. Recap

## 3-9. Final Practice and Recap
select 메뉴 추가

const [item, modifier] = React.useState(0);
useState array를 제공
첫번째 item : 데이터
두번째 item : modifier 함수 (실행시, 모든 컴포넌트들이 다시 랜더링)

## 4-0. Props
props : 첫번째 인자만 존재하며, Object 형태로 받음.

## 4-1. Memo
변경된 값만 다시 랜더링

## 4-2. Prop Types

## 5-0. Introduction
### React 프로젝트 생성
```
$ npx create-react-app react-movie
```

### 이슈 : Module not found: Error: Can't resolve 'web-vitals'
```
$ npm install web-vitals
$ npm start
```

### index.js 버전별 차이 발생.
```js
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
```

## 5-1. Tour of CRA
```
$ npm install prop-types
$ npm start
```

## 6-0. Introduction

## 6-1. userEffect
로그가 두번씩 호출 될 경우 아래 내용을 수정.
<React.StrictMode>
<App />
</React.StrictMode>

=>

<App />

## 6-2. Deps

## 6-3. Recap

## 6-4. Cleanup
React 이론 완료

## 7-0. To Do List Part One

## 7-1. To Do List Part Two

## 7-2. Coin Tracker

## 7-3. Movie App part One

## 7-4. Movie App part Two

## 7-5. React Router
```bash
$ npm install react-router-dom
```
react-router-dom 6버전 문서 : https://reactrouter.com/docs/en/v6/getting-started/overview
react-router-dom 5버전 -> 버전6 바뀐 부분
1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
```text
Switch -> Routes
```

2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
```text
<Route path"/">
<Home />
</Route>

->

<Route path="/" element={<Home />} />
```

## 7-6. Parameters
```bash
$ npm install gh-pages
```

홈페이지 생성
```bash
$ npm run build
$ git remote -v
```

## 7-7. Publishing

## 7-8. Conclusions

## 7-9. Style

## 7-10. Next Steps
이전 방식
```react
  class Clock extends React.Component {
    constructor (props) {
      super (props) ;
      this.state = {date: new Date()};
    }
    
    render () {
      return ( 
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2> 
        </div>
      );
    }
  }

  ReactDOM.render(
    <Click />,
    document.getElementById('root')
  ...
```