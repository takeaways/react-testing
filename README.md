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