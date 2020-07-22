# Learn about React with Testing

### 리액트를 하나의 도구로 인식하고 사용할 수 있는 개발을 위한 시작.

## 1. 개발 환경 구축
- DSL (Domain Specific Language)
- 설치 및 실행
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
            rules: [{
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:'babel-loader'
            }]
        },
        resolve: {
        extensions: ['.js','.jsx']
    }
    };
    ```
- babel.config.js
    ```javascript
    const path = require("path");
    module.exports = {
        entry: path.resolve(__dirname,'src/index.jsx'),
        module: {
            rules: [{
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:'babel-loader'
            }]
        }
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
    ```
### Assertion
단정문이라고 부르는 Assertion은 우리가 기대하는 값이 실제 값이랑 일치하는지 확인하는데 사용합니다. 자바스크립트의 console.assert는 우리가 기대하는 값이 아니면 콘솔에 출력되도록하여 프로그래머가 원하는 값이 아닌 경우 즉각적으로 알 수 있도록 도와줍니다. 테스트에도 단정문을 사용하여 우리가 원하는 값이 맞는지 계속해서 피드백을 얻을 수 있습니다.