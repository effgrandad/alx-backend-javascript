#!/usr/bin/env node

/* eslint-disable consistent-return */
function calculateNumber(type, a, b) {
  try {
    const roundeda = Math.round(a);
    const roundedb = Math.round(b);
    if (type === 'SUM') {
      return roundeda + roundedb;
    } if (type === 'MULTIPLY') {
      return roundeda * roundedb;
    } if (type === 'SUBTRACT') {
      return roundeda - roundedb;
    } if (type === 'DIVIDE') {
      if (roundedb === 0) {
        return 'Error';
      }
      return (roundeda / roundedb);
    }
  } catch (err) {
    return (err);
  }
}

module.exports = calculateNumber;
