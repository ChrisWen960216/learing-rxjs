# Rxjs

## 多播
+ 单播
  + One - One
+ 广播
  + One - All
  + Receiver 必须负责筛选接受到的Data或者事件类型，Emitter无法控制
+ 多播
  + One - Many

## Cold 和 Hot 数据流
+ Cold 数据每次被`subscribe`都会产生一个新的`Observable`
+ Hot 数据独立于任何订阅者，不因为订阅的变化改变数据

## Subject 和 Observable
+ `Observable` 无法对`Observable`进行追踪，但是`Subject`能够追踪订阅自己的`Observable`