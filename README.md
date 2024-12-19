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
