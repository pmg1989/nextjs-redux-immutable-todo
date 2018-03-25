docker stop next-redux-immutable-todo
docker rm next-redux-immutable-todo
#docker build -t next/redux-immutable-todo .
docker run --name next-redux-immutable-todo \
-d -p 3000:3000 \
-v "$PWD"/.next:/usr/src/app/.next \
next/redux-immutable-todo