## 摸底考试后端系统
网站工程学院摸底考试后端系统，旨在通过高频经典问题来收集学生的学习情况和知识积累深度，不断发现问题、解决问题，以考促学，边学边考的模式提高学生的整体水平

## 开发架构
- egg + mysql

## 后端服务快速开始
-  cnpm install
-  修改数据库配置
    - 路径：config/config.default.js
-  导入sql_file下的数据库表
    - 删除以前的库exam
    - 新建数据库exam
    - 导入表结构*.sql
-  npm run dev
-  访问：http://127.0.0.1:7001

## 前端效果快速开始
- 后端服务启动后
访问：http://127.0.0.1:7001/public/spa/spa/login

## 接口文档地址
https://www.showdoc.cc/267678719629929