CREATE TABLE users (id  serial PRIMARY KEY,name varchar(255), password varchar(255) );
CREATE TABLE articles (id serial PRIMARY KEY, heading varchar(512),body text, userID INTEGER REFERENCES users (id));
ALTER TABLE articles ADD COLUMN body text;

INSERT INTO articles (heading, userid, body) VALUES ('первая статья на этот  сайт', 1, '###Заоголовок');