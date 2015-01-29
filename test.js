"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var always = _interopRequire(require("./"));




test("fd-always", function (t) {
  t.plan(6);

  t.equal(typeof always, "function");
  t.ok(always(true)());
  t.equal(always(false)(), false);
  var func = function () {};
  t.equal(always(func)(), func);

  var hello = always("hello");
  t.equal(hello("world"), "hello");
  t.equal(hello("fp"), "hello");
});