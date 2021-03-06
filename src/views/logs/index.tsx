import React from 'react'
import { Item } from 'semantic-ui-react'
const Logs = () => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header>three.js动态添加模型</Item.Header>
        <Item.Meta>模型动画效果叠加 画面絮乱</Item.Meta>
        <Item.Description>
          <p>在重新定义动画之前，先停止动画cancelAnimationFrame(animationName)</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header>画面卡顿</Item.Header>
        <Item.Meta>方法结果未用变量保存，直接作用于另一个方法</Item.Meta>
        <Item.Description>
          <p>用变量保存，再作为参数，不管是随机颜色还是初始化参数</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header as='a' href='https://github.com/nicolaspanel/three-orbitcontrols-ts' target='_blank'>three-orbitcontrols-ts</Item.Header>
        <Item.Meta>Three.js轨道控制器 平移与缩放失效</Item.Meta>
        <Item.Description>
          <p>orbitcontrols绑定了three.js库的副本，并且package.json中three版本太低，所以当我在项目中使用three.js的另一个副本制作相机时，instanceof失败</p>
          <p>找到通过npm安装的three-orbitcontrols-ts依赖包，将src/index.ts这个文件单独拿出来放到项目中引用，这样orbitcontrols与项目使用的是同一个three.js副本</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header as='a'>引入mp3/mp4等媒体文件报错</Item.Header>
        <Item.Meta>提示无法找到模块？？</Item.Meta>
        <Item.Description>
          <p>用require 不要用import</p>
          <p>const audio = require('文件路径')</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header as='a'>semantic-ui-react popup组件设置open属性</Item.Header>
        <Item.Meta>如果直接设置open=true 那么第一次渲染时，弹出层将飘到你意想不到的地方</Item.Meta>
        <Item.Description>
          <p>将open的值设置一个状态为false，在componentDidMount中！延时！修改状态</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)
export default Logs