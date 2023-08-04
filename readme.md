service 层主要是做数据库处理
model 层主要是做对象模型设计
service 调用 Model 完成数据库操作

controller 层主要是处理请求
router主要是分发请求
db主要是连接好数据库并返回orm模型,用于给model层创建数据表等做处理

