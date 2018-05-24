# 分页组件 DEMO

react 分页组件，此组件使用模板为 [create-react-app](https://github.com/facebookincubator/create-react-app) 

## PageGroup 属性说明
```javascript
<PageGroup
  mini
  data={{
    pageSize: nuber,
    count: number,
    pageNo: number
  }}
  callbackPaging={(pageNo) => { }}
/>
``` 

* mini：分页按钮的样式是否为 mini 版，非必填
* data：
    * `pageSize` 分页数，多少数据为一页，非必填， mini 版为 10 条数据分页，普通版为 20 条数据分页
    * `count` 数据总条数，必填
    * `pageNo` 当前页码，必填
* callbackPaging： 点击后触发事件，返回的页码数，必填