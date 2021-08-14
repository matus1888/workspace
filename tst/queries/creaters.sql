CREATE TABLE users (id  serial PRIMARY KEY,name varchar(255), password varchar(255) );
CREATE TABLE articles (id serial PRIMARY KEY, date timestamptz, heading varchar(512),body text, userID INTEGER REFERENCES users (id));
CREATE TABLE comments (id serial PRIMARY KEY,userID INTEGER REFERENCES users (id),articleID INTEGER REFERENCES articles (id),date timestamptz, comment text);
CREATE TABLE likes (id serial PRIMARY KEY
                        , articleID INTEGER REFERENCES articles (id)
                        , userID INTEGER REFERENCES users (id)
                        , fromUserID INTEGER REFERENCES users(id));
CREATE TABLE dislikes (id serial PRIMARY KEY
                        , articleID INTEGER REFERENCES articles (id)
                        , userID INTEGER REFERENCES users (id)
                        , fromUserID INTEGER REFERENCES users(id));
CREATE TABLE visits (id serial PRIMARY KEY
                        ,  ip varchar (256)
                       );

ALTER TABLE articles ADD COLUMN body text;
ALTER TABLE articles ADD COLUMN date timestamptz;
ALTER TABLE users ADD COLUMN avatar text;
ALTER TABLE visits ADD COLUMN date timetamptz;
ALTER TABLE comments ADD COLUMN id serial PRIMARY KEY;
ALTER TABLE likes ADD COLUMN id serial PRIMARY KEY;
INSERT INTO comments (userID,articleID,date,comment) VALUES (1, 17, now(), 'первый комментарий');
INSERT INTO articles (heading, userid, body) VALUES ('первая статья на этот  сайт', 1, '###Заголовок');

-- вывести последние 10  статей из базы данных  и отсоортировать по
SELECT * FROM articles ORDER BY id DESC LIMIT 10;
-- DESC LIMIT *** OFFSET (количество пропускаемых элементов сначала)
-- INSERT INTO visits (ip) VALUES ('192.168.1.1');