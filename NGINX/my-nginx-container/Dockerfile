FROM nginx:latest

COPY ./my-nginx-html-volumn/ /usr/share/nginx/html/

# COPY ./nginx.conf /etc/nginx/nginx.conf

RUN apt-get update && apt-get install -y procps
RUN apt-get update && apt-get install -y bash