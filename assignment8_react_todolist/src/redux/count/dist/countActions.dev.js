"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItem = void 0;

var _countTypes = require("./countTypes");

var deleteItem = function deleteItem() {
  return {
    type: _countTypes.DELETE_ITEM
  };
};

exports.deleteItem = deleteItem;