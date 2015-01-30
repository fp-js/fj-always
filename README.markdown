# fj-always

[![Build Status](https://travis-ci.org/fp-js/fj-always.svg)](https://travis-ci.org/fp-js/fj-always) [![npm version](https://badge.fury.io/js/fj-always.svg)](http://badge.fury.io/js/fj-always)
> Create a function which always returns a given value.

## Installation

`npm install fj-always --save`

## Usage

```js
var always = require('fj-always');

var sayHello = always('hello');

sayHello(); // => 'hello'
sayHello(true); // => 'hello'
sayHello(false); // => 'hello'
sayHello('foo'); // => 'hello'
```


## API

### always

Return always a given value.

`always(value)`

***Parameters***

| Name          | Type        | Description                              |
| ------------- | ----------- | --------------------------               |
| value         | *           | The value that should be returned always |

***Returns***

| Type        | Description                            |
| ----------- | --------------------------             |
| function    | A function that always returns `value` |
