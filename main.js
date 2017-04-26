'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter,

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return base + arr.reduce((a, b)=>{return a + b});
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(x){return (x.hasOwnProperty(prop))});
  },

  convertNameArrayToObject: (arr) => {
    return arr.map((obj, i)=>{
      let newObj = {};
      newObj.first = obj[0];
      newObj.last = obj[1];
      return newObj;
    })
  },

  objContainsProp: (arr, prop) => {
    return arr.every((x)=>{return x.hasOwnProperty(prop)});
  },

  stringMatch: (arr, str) => {
    return arr.filter((x)=>{return x.indexOf(str)>-1});
  }
};
