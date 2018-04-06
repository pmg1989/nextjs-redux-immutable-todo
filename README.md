# Next.js redux starter
An opinionated Next.js starter kit with Express, Redux, Immutable, Less, and Jest.

## About
Next.js is an awesome and minimalistic framework to make a modern universal react app. However, there're times that we need a bit more features to build a complex SPA. That's why this project is born.

## Getting started
```
git clone https://github.com/pmg1989/nextjs-redux-immutable-todo.git
cd nextjs-redux-immutable-todo
yarn install
yarn start
```

Then open `http://localhost:3000/` to see your app.

## Structure overview
```
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── routes.js
├── server
│   └── index.js
├── src
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   └── index.js
│   ├── config.js
│   ├── containers
│   │   └── index.js
│   ├── reducers
│   │   ├── index.js
│   ├── store
│   │   └── createStore.js
└── yarn.lock
```
