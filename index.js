"use strict";

module.exports = always;
function always(arg) {
  return function () {
    return arg;
  };
}