// Реализуйте функцию, которая принимает на вход массив (элементы которого
// — это объекты) и пары ключ-значение (тоже в виде объекта), а возвращает
//  первый элемент исходного массива, значения которого соответствуют переданным
//  парам (всем переданным). Если совпадений не было, то функция должна вернуть null.

const findWhere = (arr, obj) => {
  const keyStrObj = Object.entries(obj);
  console.log(keyStrObj);
  const result = arr.find((element) => {
    const keyStrArr = Object.entries(element).flat().join();
    return keyStrObj.every((item) => keyStrArr.includes(item.join()));
  });
  return result || null;
};

console.log(findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'undefined', year: 1611 },
));
