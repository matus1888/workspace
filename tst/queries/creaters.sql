CREATE TABLE users (id  serial PRIMARY KEY,name varchar(255), password varchar(255) );
CREATE TABLE articles (id serial PRIMARY KEY, heading varchar(512),body text, userID INTEGER REFERENCES users (id));
CREATE TABLE comments (userID INTEGER REFERENCES users (id)
                        ,articleID INTEGER REFERENCES articles (id)
                        ,date timestamptz, comment text);
CREATE TABLE likes (articleID INTEGER REFERENCES articles (id)
                    , userID INTEGER REFERENCES users (id)
                    , fromUserID INTEGER REFERENCES users(id));
ALTER TABLE articles ADD COLUMN body text;
ALTER TABLE users ADD COLUMN avatar text;
INSERT INTO comments (userID,articleID,date,comment) VALUES (1, 17, now(), 'первый комментарий');
INSERT INTO articles (heading, userid, body) VALUES ('первая статья на этот  сайт', 1, '###Заоголовок');

-- вывести последние 10  статей из базы данных  и отсоортировать по
SELECT * FROM articles ORDER BY id DESC LIMIT 10;