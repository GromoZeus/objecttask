// Реализуйте функцию, которая принимает на вход цепь ДНК
// и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
// G -> C
// C -> G
// T -> A
// A -> U
// ДНК и РНК это последовательности нуклеотидов.

const dnaToRna = (dna) => {
  let rna = '';
  const nucleotideDNA = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  dna.split('').forEach((nucleotide) => {
    if (!Object.hasOwn(nucleotideDNA, nucleotide)) {
      rna = null;
    } else if (rna !== null) {
      rna += nucleotideDNA[nucleotide];
    }
  });
  return rna;
};

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
