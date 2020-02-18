预览网址：http://111.229.226.139/<br />

ThreeJS学习网站：https://www.wjceo.com/blog/threejs/

## 前言

请确保安装python并配置环境变量<br />

可运行：<br />

npm install --global --production windows-build-tools<br />

npm config set python <python安装路径><br />

npm config set msvs_version 2017<br />

### `npm install`

下载项目所需模块

### `npm start`

启动项目 [http://localhost:3000](http://localhost:3000)

### `npm test`

启动测试运行程序

### `npm run build`

项目打包至build文件夹

### `npm run eject`

暴露配置文件，属于单向操作，不可逆

#### `小提示`

项目中使用了react-loadable，这个插件有一个毛病就是用了componentWillMount，并且一直没有修复，所以在浏览器控制台会出现警告（并不影响使用）<br />
有代码洁癖的小可爱可以在node_modules/react-loadable/lib/index.js中找到componentWillMount，将其替换成UNSAFE_componentWillMount就ok了<br />