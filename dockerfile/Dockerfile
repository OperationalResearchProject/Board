FROM ubuntu:xenial

MAINTAINER Florian Vansteene <florian.vansteene@gmail.com>

# Apt packages
ADD apt_requirements.txt apt_requirements.txt
RUN apt-get update && \
    apt-get install -y $(grep -vE "^\s*#" apt_requirements.txt  | tr "\n" " ") && \
# NodeJS
    curl -sL https://deb.nodesource.com/setup_6.x | bash -&&\
    apt-get install -y nodejs &&\
    npm install -g bower &&\
# Dashboard
    git clone https://github.com/geoffreyp/ORA-Dashboard.git && \
    cd ORA-Dashboard &&\
    npm install &&\
    bower --allow-root install

WORKDIR /ORA-Dashboard
CMD [ "npm", "start" ]
