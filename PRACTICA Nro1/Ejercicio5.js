const esPalindromo = (cad) => {
  let invertida = cad.split("").reverse().join("");
  return cad === invertida;
};

console.log(esPalindromo("oruro")); 
console.log(esPalindromo("hola"));  
