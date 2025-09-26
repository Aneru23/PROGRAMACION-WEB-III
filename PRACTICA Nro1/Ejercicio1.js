const contarVocales = (texto) => {
  let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let letra of texto.toLowerCase()) {
    if (obj.hasOwnProperty(letra)) {
      obj[letra]++;
    }
  }
  return obj;
};
console.log("nuevamente"); 
console.log(contarVocales("nuevamente")); 
