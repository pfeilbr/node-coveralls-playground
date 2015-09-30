[![Coverage Status](https://coveralls.io/repos/pfeilbr/node-coveralls-playground/badge.svg?branch=master&service=github)](https://coveralls.io/github/pfeilbr/node-coveralls-playground?branch=master)

# node-coveralls-playground

To learn and experiment with [coveralls](https://coveralls.io/) test coverage service.

## Setup Steps

1. Install deps

    ```
    $ npm install mocha coveralls mocha-lcov-reporter --save-dev
    ```

2. Install [istanbul](https://gotwarlost.github.io/istanbul/)

    ```
    $ npm install istanbul --save-dev -g
    ```

3. If running from command line, ensure `.coveralls.yml` is in current directory.  It should contain a line with `repo_token: REPO_TOKEN`

## Running

To run on the tests in the `test/` directory.

```
$ istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
```

> You can view the raw coverage output in the `./coverage` directory.
