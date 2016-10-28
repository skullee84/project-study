### Study~

---

#### requirement

- nginx

- tomcat

- node.js

- java 1.8

---

#### nginx.conf

아래 {project_folder}를 본인의 디렉토리로 변경.

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;

  sendfile    on;
  tcp_nopush  on;

  keepalive_timeout  10;

  upstream backend {
    server 127.0.0.1:8080;
  }

  server {
    listen       80;
    server_name  local-www.study.com;

    charset utf-8;

    location / {
        root  {project_folder}/to-do-frontend/dist;
        index  index.html index.htm;
    }

    location /api {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }
}
```

---

#### frontend build

{project_folder}/to-do-frontend 디렉토리에서

```
npm install

npm run build

npm start
```
