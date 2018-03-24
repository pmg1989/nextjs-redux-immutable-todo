# 指定我们的基础镜像是node，版本是v8.10.0
 FROM node:8.10.0
 # 指定制作我们的镜像的联系人信息（镜像创建者）
 MAINTAINER FELIXPAN <972401854@qq.com>

 #创建app目录,保存我们的代码
RUN mkdir -p /usr/src/app
 
 # 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
 ADD . /usr/src/app
 # cd到app文件夹下
 WORKDIR /usr/src/app/
 
 # 安装项目依赖包
 RUN npm install yarn --registry=https://registry.npm.taobao.org
 RUN yarn install --registry=https://registry.npm.taobao.org
 RUN yarn run build
 
 # 配置环境变量
 ENV HOST 0.0.0.0
 ENV PORT 3000
 
 # 容器对外暴露的端口号
 EXPOSE 3000
 
 # 容器启动时执行的命令，类似npm run start
 CMD ["yarn","start"]