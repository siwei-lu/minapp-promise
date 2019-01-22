# minapp-promise

不到 1KB 的小程序异步接口 Promise 化，支持所有小程序异步接口

## 如何使用

1. 通过 npm 安装

    ```sh
    npm install minapp-promise
    ```

2. 构建

    在微信开发者工具中依次点击 `工具` - `构建 npm`

3. 在代码中引入

    ```javascript
    import pro from 'minapp-promise'

    pro.showToast({ title }).then(doSomething)
    pro.request({ url }).then(handleResponse).catch(handleError)
    ```

## 更新记录

### v0.0.1

#### Feats:

- 实现功能