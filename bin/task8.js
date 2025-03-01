// Реализуйте функцию toRoman(), которая переводит арабские числа
//  в римские. Функция принимает на вход целое число в диапазоне от 1 до 3000, а
//  возвращает строку с римским представлением этого числа.

// Реализуйте функцию toArabic(), которая переводит число в римской
//  записи в число, записанное арабскими цифрами. Если переданное римское число не
//  корректно, то функция должна вернуть значение false.

const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rome = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

export const toRoman = (numRome) => {
  let result = '';
  let num = numRome;
  let i = 0;
  while (num > 0) {
    if (num >= arabic[i]) {
      result += rome[i];
      num -= arabic[i];
      i -= 1;
    }
    i += 1;
  }
  return result;
};

export const toArabic = (numArab) => {
  let result = 0;
  const num = numArab;
  let i = 0;
  while (num.length > i) {
    let str = '';
    if (rome.includes(num[i] + num[i + 1])) {
      str = num[i] + num[i + 1];
      i += 2;
    } else {
      str = num[i];
      i += 1;
    }
    result += arabic[rome.indexOf(str)];
  }
  const numRome = toRoman(result);
  return numRome === num ? result : false;
};

console.log(toRoman(1)); // I
console.log(toRoman(4)); // IV
console.log(toRoman(1000)); // M
console.log(toArabic('I')); // 1
console.log(toArabic('IV')); // 4
console.log(toArabic('M')); // 1000
console.log(toArabic('IIII')); // false
console.log(toArabic('XIIII')); // false
