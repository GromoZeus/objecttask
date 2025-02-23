// Реализуйте функцию, которая принимает на вход список параметров
// и возвращает сформированный query string из этих параметров

const bqs = (obj) => {
  let str = '';
  const array = Object.entries(obj).sort();
  array.forEach(([key, values]) => {
    str += `&${key}=${values}`;
  });
  return str.slice(1);
};

console.log(bqs({}));
console.log(bqs({ page: 1 }));
console.log(bqs({ per: 10, page: 1 }));
console.log(bqs({
  a: 10,
  s: 'Wow',
  d: 3.2,
  z: '89',
}));
console.log(bqs({ param: 'all', param1: true }));
