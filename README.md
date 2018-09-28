# PWA Starter Template

## What is in here?

This project contains a scaffold for Progressive Web Applications. It passes all [lighthouse](https://developers.google.com/web/tools/lighthouse/) audits with the exception of HTTPS redirect support since this needs to be configured along with your hosting solution. Specifically, this template provides:

- Service worker registration
- Push notification support
- Pre-caching of static assets and a react-powered App Shell

### Tech

  - [React](https://reactjs.org/) | Powers the frontend
  - [Typescript](https://www.typescriptlang.org/) | Adds types to JS and reduces runtime bugs
  - [NodeJS](https://nodejs.org/en/) / [ExpressJS](http://expressjs.com/) | Powers a simple web server for frontend assets
  - [Webpack](https://webpack.js.org/) | Bundles static assets and provides frontend dev tools
  - [Workbox](https://developers.google.com/web/tools/workbox/) / [Workbox Webpack Plugin](https://developers.google.com/web/tools/workbox/guides/codelabs/webpack) | Service worker libraries
  - [Jest](https://jestjs.io/) | Unit testing and coverage against regressions and for expected behavior
  - [Heroku](https://www.heroku.com/) / [Get Started](https://devcenter.heroku.com/start) | Provides hosting for production builds

## What's not in here?

### CI/CD

This repo deliberately lacks CI/CD at the moment, which we intended to be configured by
specific applications that use this template. The added customization is a nice-to-have
and imposes a workflow that might not work well for all teams/ICs.

The production pipeline can be tested on heroku, which uses the `npm start` script to run the template application and `npm postinstall` script to create a build directory containing the requisite compiled assets (Typescript and Webpack compilation). See the `get started` link above for more detail.

### Offline Data Persistence

We were also hesitant to impose any client-side data persistence (i.e. IndexedDB, Web SQL, etc)
solutions that an application may require. If you find that your application will need to 
store data offline, we've found this [resource](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa) to be helpful.

## Additional Resources

Resources on PWA features and additional information can be found in our [wikis](https://github.com/focuslocus/react-node-typescript-template/wiki)
