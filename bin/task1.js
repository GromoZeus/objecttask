// Реализуйте функцию, которая принимает на вход массив,
//  состоящий из массивов-пар и возвращает объект, полученный из этих пар.

const buildObject = (arr) => {
  const obj = {};
  arr.forEach(([key, value]) => {
    obj[key] = value;
  });
  return obj;
};

console.log(buildObject([['key', 'value'], ['key2', 'value2']])); // { key: 'value', key2: 'value2' }
console.log(buildObject([['key', 'value']])); // { key: 'value' }
console.log(buildObject([])); // {}
