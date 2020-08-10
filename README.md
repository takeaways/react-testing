# Learn about React with Testing

### 리액트를 하나의 도구로 인식하고 사용할 수 있는 개발을 위한 시작.

## 1. 개발 환경 구축

- DSL(Domain Specific Language)
- 설치 및 실행 하기
  ```bash
  //live-reloading
  $npm i -D webpack webpack-cli webpack-dev-server
  $npm install react react-dom
  $npm i -D babel-loader // webpack에서 babel을 사용할 수 있도록 도움
  $npm i -D @babel/core //
  $npm i -D @babel/preset-env @babel/preset-react
  ```
- webpack.config.js
  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  ```
- babel.config.js
  ```javascript
  const path = require('path');
  module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  };
  ```
- package.json
  ```json
  "scripts":{
      "start":"webpack-dev-server"
  }
  ```
- 코드를 실행하고, js를 연결하는 방법
  ```bash
  $npm start
  ```
  ```html
  # src/index.jsx // webpack의 기본 설정으로 main.js로 파일이 추가 됩니다.
  # index.html
  <script src="main.js" defer><script>
  ```

## 2. 테스트 환경구축

### Jest

1. jest는 자바스크립트 테스팅 프레임워크입니다.
   - 간단한 설정만으로도 테스트를 실행할 수 있습니다.
   - 풍부한 matcher를 제공하여 별도의 모듈 없이 테스트를 더 풍부하게 표현할 수 있습니다.
   - Coverage도 별도의 설치 없이 확인할 수 있습니다.
   - Mocking 등을 지원하여 테스트를 더 쉽게 가능하게 해주는 프레임워크입니다.

- jest install
  ```bash
  $npm i -D jest @types/jest babel-jest
  $npm i -D @testing-library/react @testing-library/jest-dom
  $npm i -D jest-plugin-context
  ```

### Assertion

단정문이라고 부르는 Assertion은 우리가 기대하는 값이 실제 값이랑 일치하는지 확인하는데 사용합니다. 자바스크립트의 console.assert는 우리가 기대하는 값이 아니면 콘솔에 출력되도록하여 프로그래머가 원하는 값이 아닌 경우 즉각적으로 알 수 있도록 도와줍니다. 테스트에도 단정문을 사용하여 우리가 원하는 값이 맞는지 계속해서 피드백을 얻을 수 있습니다.

### Signature

모든 연산은 연산의 이름, 매개변수, 반환값을 명세합니다. 이를 시그니처라고 부릅니다.

### Testing Libray

- render를 사용하여 컴포넌트를 구성하면 DOM이 반환이 된다.
- jest.config.js
  ```javascript
  module.exports = {
    setupFilesAfterEnv: [
      './jest.setup', //기본으로 추가 시켜줄 파일을 설정할 수 있다.
    ],
  };
  ```
- jest.setup.js
  ```javascript
  import '@testing-library/jest-dom';
  ```
- 사용 예시

  ```jsx
  import React from "react";
  import {render, fireEvent} from '@testing-library/react';

  import Item from "./Item";

  test('Item', () => {
      const task = {
          id: 1,
          title: 'Hello'
      }
      const onClickDeleteTask = jest.fn();
      const {container, getByText} = render(
          <Item
              task={task}
              onClickDeleteTask={onClickDeleteTask}
          />)

      expect(container).toHaveTextContent("Hello")
      expect(container).toHaveTextContent("Delete")

      expect(onClickDeleteTask).not.toBeCalled();
      fireEvent.click(getByText("Delete"))
      expect(onClickDeleteTask).toBeCalledWith(1);
  ```


    })
    ```

## 3. Redux 적용하기

### Flux Architecture

Flux는 페이스북이 제시한 클라이언트 웹 애플리케이션 아키텍쳐입니다. 위의 문서를 반드시 정독해주세요. 아마 여러 가지로 어려운 내용이 있을 겁니다. 실제 Redux는 구현이 좀 다른 부분이 있기 때문에 각 항목에 대해 디테일하게 모두 숙지하실 필요는 없습니다. 다만, 단방향 데이터 Flow란 점과 Action이 Dispatcher를 통해 Store에 전달되는 흐름이 핵심이란 걸 기억해야 합니다.

### Redux - Flux Architecture의 구현체

Redux로 상태 관리를 하는 이유와 이로 인해 얻어지는 이점은 다음과 같습니다.

- 상태 관리는 사실 리액트의 관심사가 아니다.
- App은 상태가 어떻게 처리되는지 모르게 한다.
- App은 View가 어떻게 그려지는지만 관심을 갖게 한다.
- App은 상태 관리(store)와 View를 연결만 해준다.
- App은 상태 관리 로직이 어떻게 구현됐는지는 모른다.
- 상태 관리 로직 변경의 영향이 View로 전파되지 않는다.
- Redux 설치
  ```bash
  $npm i redux react-redux
  ```

### 3가지 원칙

- 전체 상태값을 하나의 객체에 저장한다.
- 상태값은 불변 객체다.
- 상태값은 순수 함수에 의해서만 변경되어야 한다.

### Action

상태값은 오직 액션 객체에 의해서만 변경되어야 합니다.

- type: (string)
- payload(object): { taskTitle }

액션 객체에는 type, payload 속성으로 구성되는데 type은 어떤 액션인지 구별할 수 있는 문자열 값이며 payload 안에는 변경할 상태값(불변 객체)이 전달됩니다. Redux에서 상태값을 수정하는 유일한 방법은 액션 객체와 함께 dispatch 메서드를 호출하는 겁니다.

### Reducer

- 리덕스에선 기존 상태를 다른 상태로 변경하는 함수를 리듀서(reducer)라고 합니다. reducer의 구조는 다음과 같습니다.

  ````javascript
  function reducer(state, action) {
  // ...

      return state;
      }
      ```

  reducer는 이전 상태값과 액션 객체를 입력으로 받아서 새로운 상태값을 만드는 순수 함수입니다. 순수 함수는 부수 효과(함수 외부의 상태를 변경시키는 것)를 발생시키지 않아야 합니다. 순수 함수는 같은 입력값에 대해 항상 같은 값을 반환합니다.
  ````

### Store

store는 리덕스의 상태값을 갖는 객체입니다. 액션의 발생은 store의 dispatch 메서드로 시작됩니다. 스토어는 액션이 발생하면 미들웨어 함수(이번 주엔 등장하지 않음)를 실행하고, reducer를 실행해서 상태값을 새로운 값으로 변경합니다. 첫 번째 원칙에서 말한 애플리케이션의 전체 상태값을 저장하는 하나의 객체가 바로 store입니다.

### Provider

문서는 무언가 복잡한 설명을 하는 것 같습니다. 단순하게 정리하면 React로 작성된 컴포넌트들을 Provider안에 넣으면 하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해집니다.

### 비동기(Asynchronous)

동기식 처리 모델 vs 비동기식 처리 모델
웹 프론트엔드의 복잡성은 계속 증가하고 있습니다. 반면 JavaScript는 싱글 쓰레드 기반 이벤트 루프로 실행되기 때문에 동기 로직이 많아질수록 브라우저에서 앱의 사용성이 급격히 줄어들 겁니다. 따라서 현대의 JavaScript를 다루는 개발자라면 비동기와 동시성(concurrency), 나아가 병렬성(parallelism)에 대한 이해가 필수적입니다.

### 라우팅(historyApiFallback)

- historyApiFallback
  대다수의 웹 서비스를 보면 존재하지 않는 페이지에 접근할 때 index.html로 redirect 해주는 걸 볼 수 있습니다. 개발 환경에서 이러한 기능은 webpack devServer에서 설정할 수 있습니다.
  ```js
  module.exports = {
    //...
    devServer: {
      historyApiFallback: {
        index: 'index.html',
      },
    },
  };
  ```

라우팅이란 출발지에서 목적지까지의 경로를 결정하는 기능입니다. 애플리케이션의 라우팅은 사용자가 태스크를 수행하기 위해 어떤 화면(view)에서 다른 화면으로 화면을 전환하는 내비게이션을 관리하기 위한 기능을 의미합니다. 일반적으로 사용자가 요청한 URL 또는 이벤트를 해석하고 새로운 페이지로 전환하기 위한 데이터를 취득하기 위해 서버에 필요 데이터를 요청하고 화면을 전환하는 위한 일련의 행위를 말합니다.

- react-router-dom 설치
  ```bash
  $npm i react-router-dom
  ```

### Authorization 헤더

- 1. Authentication (인증) [ email, password ]
- 2. Authorization (인가) [what to do]

HTTP Authorization 요청 헤더는 유저 에이전트에서 서버에 인증정보를 전달하기 위해 사용됩니다.

Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
서버에 type과 credentials을 전달해야 하는데 강의에서는 Bearer 타입을 사용하고 있습니다.

### LocalStorage

LocalStorage는 브라우저에 데이터를 저장하기 위해 사용됩니다. localStorage는 저장된 데이터의 만료기간이 없고, key와 value는 항상 문자열로 저장됩니다.

### Emotion

CSS in Javascript 자바스크립트를 이용해서 css를 표현하는 라이브러리.

- styled-components를 이용해서도 할 수 있어요.

## PureComponents

- 퓨어 컴포넌트는 클래스 베이스를 기반으로 만들어진 컴포넌트를 만들때 사용하는 방법입니다.
- 퓨어컴포넌트란?
  - props로 내려주는 값으로만 그려지고 상태를 관리하지 않는 컴포넌트!
  - jsx에서 가상돔을 업데이트 하는 것이 싫다. 캐쉬 하는 것 처럼하고 싶다.
  - React.memo with useCallback을 사용하여 변화를 캐싱해준다.
    - props가 변경 되지 않는 다면, 가상돔 트리가 바뀌지 않도록 처리한다.
