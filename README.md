# DeevCorp Digital Agency Website Template


[![DEEVCORP|SOFTWARE DEVELOPMENT COMPANY](https://www.deevcorp.com/twitter-card.png)](https://www.deevcorp.com/)

## Features
- Responsive design
- SEO Optimized with 100% score from LightHouse
- Optimized Images

## Tech

- Gatsby JS - Static site generator for React Applications
- React Js
- Contentful [Content Management System]
- GraphQL
- Node.js

## Installation

This template requires [Node.js](https://nodejs.org/) v10+ to run.
Create a `.env.development` file at the root folder of the application and populate with `CONTENTFUL_SPACEID` and ``CONTENTFUL_ACCESS_TOKEN`` generated from [Contentful](https://www.contentful.com/). These fields are needed to run the application.

```
.env.development file
CONTENTFUL_SPACEID = ************
CONTENTFUL_ACCESS_TOKEN = ***************************
```

Install the dependencies and devDependencies and start the server.

```sh
cd deeevcorp-website-template
npm i
gatsby develop
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Development

Want to contribute? Great!

## License
