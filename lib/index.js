'use strict';

const kreezUtils = {};

const type = kreezUtils.type = {};

type.toString = (obj) => {
  return String(obj);
};

type.toNumber = (obj) => {
  return Number(obj);
};

type.toBoolean = (obj) => {
  return Boolean(obj);
};

type.toArray = (obj) => {
  return [ obj ];
};

module.exports = kreezUtils;
