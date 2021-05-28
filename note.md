### node 服务器创建流程




```flow
frontEnd=>start: 前端访问
browser=>operation: 浏览器发起请求，请求端口进入 nginx，反向代理
backEnd=>operation: bin 中启动服务,将处理逻辑通过 createServer 参数传入,后端服务器接收到请求
interface=>operation: 接收到请求，app.js 从 req 参数中处理 path ，解析 query ,分发到 router 不同接口
deal=>operation: router 从 controller 获得数据，返回 model 层规定的标准数据
backData=>operation: app.js 将返回数据通过 res 参数返回到前端
frontEnd->browser->backEnd->interface->deal->backData->
&```