docker stop next-redux-immutable-todo
docker rm next-redux-immutable-todo
docker run --name next-redux-immutable-todo \
-d -p 3000:3000 \
-v /Users/newband/Documents/demo/nextjs/nextjs-redux-immutable-todo/.next:/usr/src/app/.next \
next/redux-immutable-todo