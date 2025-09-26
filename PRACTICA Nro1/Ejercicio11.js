const paso1 = () => Promise.resolve("Paso 1 listo");
const paso2 = () => Promise.resolve("Paso 2 listo");
const paso3 = () => Promise.resolve("Paso 3 listo");

paso1()
  .then(r => { console.log(r); return paso2(); })
  .then(r => { console.log(r); return paso3(); })
  .then(r => console.log(r));
