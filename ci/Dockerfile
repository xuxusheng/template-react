# 多阶段构建 step 1
FROM node:16 AS builder
WORKDIR /project
# 安装依赖
COPY package.json pnpm-lock.yaml /project/
RUN npm i -g pnpm && pnpm i
# 构建
COPY . /project/
RUN pnpm run build

# 多阶段构建 step 2
FROM nginx
EXPOSE 80
# 调整时区
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && dpkg-reconfigure --frontend noninteractive tzdata \
    && rm -rf /var/lib/apt/lists/*
# 准备静态资源
COPY --from=builder /project/dist /usr/share/nginx/html
COPY ./ci/default.conf /tmp/default.conf
COPY ./ci/entrypoint.sh /
# 启动命令
ENTRYPOINT ["sh", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]