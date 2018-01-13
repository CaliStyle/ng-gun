# NG Gun on Proxy Engine NG

[![Build status][ci-image]][ci-url]

An Angular CLI, Angular Universal, [Trails](https://trailsjs.io/), Gun.js, and [Proxy Engine](https://github.com/CaliStyle/trailpack-proxy-engine) Boiler Plate complete with NgPacks concept.

Do you need to use Angular 5+ with Server Side Rendering (SSR) and an advanced node.js framework with Gun.js? This is the boiler plate for you!

## NgEngine and NgPacks
From our time spent working on Trails, we've really enjoyed some of the design patters, specifically Trailpacks. We're bringing that to Angular. With NgPacks you can register all of your modular components, reducers, actions, effects and more, even if they are lazy loaded without loosing performance. The other thing that we love about Trails is it's configuration concept.  With NgEngine, you now have environment driven configuration for all your NgPacks.

# Configuring your Application
## Trails
For Trails documentation see the [Trails Website](https://trailsjs.io).  The only difference is that we are extending trails with Typescript and bundling it with webpack. You can configure Trails through `src/apiConfig`.

## Angular
For Angular documentation see the [Angular Website](https://angular.io).  You can configure your NgEngine Angular app through `src/appConfig`. 

# Running your Application

## Trails server
run `npm run build && node dist/server.js` for the trails server to start. Navigate to `http://localhost:3000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm start` for a dev server that expects the API server at `http://localhost:3000`.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Quick Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Alternatively run `npm run build`. The build artifacts will be stored in the `dist/` directory.

## Production Build

Run `npm run build:prod` for a production build. The build artifacts will be stored in the `dist/` directory. To start the server run `node dist/server`.

## Running CI tests
Run `npm test` to execute the unit test, end to end tests, and mocha spec test for node.js.

## Running unit tests

Run `ng test` or `npm run test:ng` to execute the unit tests via [Karma](https://karma-runner.github.io). To continuously run unit tests, run `npm run test:ng:watch`

## Running end-to-end tests

Run `ng e2e` or `npm run test:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to Heroku
First you will need to create a Heroku app. The package.json includes a "heroku-postbuild" script that will build the app. The Procfile includes the location to start the node server which will serve the app on Heroku.

## Known Issues
The Trails REPL (trailpack-repl) includes some characters that production webpack builds (`webpack -p`) can not parse and fails during the uglify process.  Currently, we use the normal webpack build which is faster but has a larger slug. If you can fix this, we would love a PR!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-engine-ng/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-engine-ng/tree/master
