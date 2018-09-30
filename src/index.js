// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => property;
const createNotEnumerableProperty = (property) => Symbol(property);
const createProtoMagicObject = () => {
  function magicObj () {};
  magicObj.__proto__ = magicObj.prototype;
  return magicObj;
};
const incrementor = () => {
  if (!incrementor.__proto__.count) {
    incrementor.__proto__.count = 1;
  } else {
    counter();
  }


  counter.toString = function () {
    return incrementor.__proto__.count;
  }
  
  function counter() {
    incrementor.__proto__.count++;
    return counter;
  }

  return counter;
};

const asyncIncrementor = () => {
  if (!asyncIncrementor.__proto__.counter) {
    asyncIncrementor.__proto__.counter = 1;
  } 
  return Promise.resolve(asyncIncrementor.__proto__.counter++);
};
function* createIncrementer() {
  let n = 0;
  while (true){
    yield ++n;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {return new Promise(function(resolve , reject) { setTimeout (function() {resolve(param)},1001) })};
const getDeepPropertiesCount = (obj) => {
  let count = 0;
  for (let key in obj ){
    count++;
    if (Object.keys(obj[key]).length) {
      count+=getDeepPropertiesCount(obj[key]);
    }
  }
  return count;
};
const createSerializedObject = () => {return new Number(0)};
const toBuffer = () => {};
const sortByProto = (arr) => {
  var arr1 = arr.slice();
  arr1.sort(sortPr);
  function sortPr (a,b) {
    if (a.__proto__>b.__proto__){
    return 1;
    } else return -1;
    return 1;
  }
  return arr1;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;