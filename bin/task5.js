// Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает
// на вход два параметра: набор символов в нижнем регистре (строку) и слово,
// и проверяет, можно ли из переданного набора составить это слово.
// В результате вызова функция возвращает true или false.
// При проверке учитывается количество символов, нужных для составления
// слова, и не учитывается их регистр.

const getObjectWoldCount = (str) => {
  const result = {};
  const strArr = str.split('');
  strArr.forEach((element) => {
    if (result[element] === undefined) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  });
  return result;
};

const scrabble = (str, word) => {
  const strObj = getObjectWoldCount(str.toLowerCase());
  const wordObj = getObjectWoldCount(word.toLowerCase());
  const strArrKeys = Object.keys(strObj);
  const wordArrKeys = Object.keys(wordObj);
  let result = true;
  wordArrKeys.forEach((element) => {
    if (!strArrKeys.includes(element) || strObj[element] < wordObj[element]) {
      result = false;
    }
  });
  return result !== false;
};

console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avj', 'javascript')); // false
console.log(scrabble('scriptingjava', 'javascript')); // true
console.log(scrabble('scriptjavapython', 'javascript')); // true
console.log(scrabble('scriptingjava', 'javascript')); // true
