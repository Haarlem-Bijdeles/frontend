# starter-template

> My sensational Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

{
  "query": "query GET_POSTS($first: Int) {\n  posts(first: $first) {\n    edges {\n      node {\n        id\n        title,\n        excerpt\n        date\n        featuredImage {\n          sourceUrl(size:MEDIUM)\n        }\n      }\n    }\n  }\n}\n",
  "variables": {
    "first": 2
  }
}