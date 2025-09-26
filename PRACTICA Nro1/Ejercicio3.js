const separarNumeros = (arr) => {
  let obj = { pares: [], impares: [] };
  arr.forEach(n => (n % 2 === 0 ? obj.pares.push(n) : obj.impares.push(n)));
  return obj;
};

console.log(separarNumeros([1, 2, 3, 4, 5]));
