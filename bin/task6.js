// Реализуйте функцию, которая сравнивает два объекта и возвращает результат
// сравнения в виде объекта. Ключами результирующего объекта
//  будут все ключи из двух входящих объектов, а значением строка с описанием отличий:
//  added, deleted, changed или unchanged.

// Возможные значения:

//     added — ключ отсутствовал в первом объекте, но был добавлен во второй
//     deleted — ключ был в первом объекте, но отсутствует во втором
//     changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
//     unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями

const genDiff = (obj1, obj2) => {
  const result = {};
  const cloneObjOne = { ...obj1 };
  Object.assign(cloneObjOne, obj2);
  const keysObjOne = Object.keys(cloneObjOne);
  keysObjOne.forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(obj2, key)) {
      result[key] = 'deleted';
    } else if (obj1[key] === obj2[key]) {
      result[key] = 'unchanged';
    } else {
      result[key] = 'changed';
    }
  });
  return result;
};

console.log(genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
));
