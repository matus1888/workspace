CREATE TABLE users (id  serial PRIMARY KEY,name varchar(255), password varchar(255) );
CREATE TABLE articles (id serial PRIMARY KEY, heading varchar(512), userID INTEGER REFERENCES users (id));