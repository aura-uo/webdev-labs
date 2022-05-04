-- Exercise 1 (done for you):
SELECT * FROM users;

-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;

-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;

-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26;

-- Exercise 5
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26 or user_id=12;

-- Exercise 6
SELECT count(*)
FROM posts;

-- Exercise 7
SELECT user_id, count(*) as count
FROM comments
GROUP BY user_id
ORDER BY count DESC;

-- Exercise 8
select posts.id as id,
       posts.image_url as image_url,
       user_id as user_id,
       username as username,
       first_name as first_name,
       last_name as last_name
from posts
inner join users u on posts.user_id = u.id
where user_id=26 or user_id=12

-- Exercise 9
select id, pub_date, following_id
from posts
inner join (
    select following_id
    from following
    where user_id = 26
    ) as f on f.following_id = user_id;

-- Exercise 10

-- Exercise 11
insert into bookmarks(user_id, post_id, timestamp)
values (26, 219, now());

insert into bookmarks(user_id, post_id, timestamp)
values (26, 220, now());

insert into bookmarks(user_id, post_id, timestamp)
values (26, 221, now());

-- Exercise 12
delete from bookmarks
where post_id = 219;

delete from bookmarks
where post_id = 220;

delete from bookmarks
where post_id = 221;

-- Exercise 13
update users
set email = 'knick2022@gmail.com'
where id = 26;

-- Exercise 14

select * from following;
