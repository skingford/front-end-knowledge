## watch

- --config: 支持以自定义配置文件启动，默认 webpack.config.js 文件
- --watch：自动地重新编译修改后的模块

```js
 "scripts": {
    "dev": "npx webpack --config webpack.config.js",
    "watch": "webpack --watch",
    "build": "webpack"
  },
```

## webpack-dev-server

[develop](https://webpack.docschina.org/guides/development/)

作用：启动一个默认端口 8080 的服务，实时重新加载，不需要刷新浏览器
