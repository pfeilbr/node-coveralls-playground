# node-coveralls-playground

To learn and experiment with [coveralls](https://coveralls.io/) test coverage service.

## Setup Steps

1. Install deps

    $ npm install mocha coveralls mocha-lcov-reporter --save-dev

2. Install [istanbul](https://gotwarlost.github.io/istanbul/)

    $ npm install istanbul --save-dev -g

## Running

  $ istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage