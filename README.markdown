# fd-always

[![Build Status](https://travis-ci.org/fp-js/fd-always.svg)](https://travis-ci.org/fp-js/fd-always) [![npm version](https://badge.fury.io/js/fd-always.svg)](http://badge.fury.io/js/fd-always)
> Create a function which always returns a given value.

## Installation

`npm install fd-always --save`

## Usage

```js
var always = require('fd-always');

var sayHello = always('hello');

sayHello(); // => 'hello'
sayHello(true); // => 'hello'
sayHello(false); // => 'hello'
sayHello('foo'); // => 'hello'
```
