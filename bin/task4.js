// Реализуйте функцию, которая выполняет глубокое копирование объектов.

const cloneDeep = (obj) => {
  const array = Object.entries(obj);
  // console.log(array);
  const cloneObj = {};
  array.forEach(([key, values]) => {
    cloneObj[key] = typeof values === 'object' ? cloneDeep(values) : values;
  });
  return cloneObj;
};

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

console.log(cloneDeep(data));
