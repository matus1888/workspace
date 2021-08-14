# Workspace
## _This project is fullstack Js application_
________________________
In this project, there are two main directories frontst and tst, which are front and back, respectively. In the front of the unit, React with its hooks is taken as a basis. The backend part is based on Express and Postgres database, which run on the local machine and are forwarded to the network.

## Tech

Calc uses libs:

- [ReactJS, Hooks]
- [Express]
- [PostgreSQL]
- [Bootstrap]

The main emphasis, of course, was placed on the front part of the application.

## Installation

To deploy a database server, you need to refer to the appropriate instructions for your operating system. I am using ubuntu 18.04 as a base, as a stable version of a free operating system. The database structure looks like this:
USERS:
id   | name | password |avatar 
---- | ---- | ---- | ---- |
id  serial PRIMARY KEY|name varchar(255)| password varchar(255)|text
________________
ARTICLES: 
id   | date |heading |body|userID 
---- | ---- | ---- | ---- |------|
id serial PRIMARY KEY| date timestamptz| heading varchar(512)|body text| userID INTEGER REFERENCES users (id)
 COMMENTS
 _____________________
 id   | userID |articleID |date |comment 
---- | ---- | ---- | ---- |------|
id serial PRIMARY KEY|userID INTEGER REFERENCES users (id)|articleID INTEGER REFERENCES articles (id)|date timestamptz| comment text

Etc. You will find a more detailed structure in the creaters.sql file.

#### back:
```sh
cd tst 
npm install
npm start 
```

The frontend interface is based on the use of Bootstrap cards. The content of the article must be MD markup for correct display. After registration, the user has the following functions: leaving a comment, writing his own articles, as well as adding the ability to put likes and dislikes
#### front:
```sh
cd fronttst 
npm install
npm start 
```
## Screenshots
![logo1](https://github.com/matus1888/workspace/blob/main/scr1.jpg)
__________
![logo2](https://github.com/matus1888/workspace/blob/main/scr1.png)
__________
![logo3](https://github.com/matus1888/workspace/blob/main/scr2.png)

## Watch:
[gh-pages my Workspace](https://matus1888.github.io/workspace/)
