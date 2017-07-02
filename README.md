# ORA-Dashboard

Overview
-----------
This Dashboard is a Node.js Dashboard to see the transfers between the client and the server as well as graphs within for the project
Dashboard of the Operational Research Api.
 
Prerequisites
-------------
- [Docker](https://www.docker.com/) 


Getting Started
---------------
Make sure you have run mongodb and server before continue :

- Mongodb : 

```bash
docker pull fvansteene/mongodb
docker run -d -p 27017:27017 --name mongodb fvansteene/mongodb
```

- Server : 

```bash
docker pull fvansteene/roapi
docker run -d -p 50051:50051 --link mongodb --name ros fvansteene/roapi
```


- Now you can run this following commands :

```bash
docker pull fvansteene/dashboardroapi
docker run -d -p 3000:3000 --name dashboard --link mongodb fvansteene/dashboardroapi
``` 

