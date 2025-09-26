setTimeout(() => {
  console.log("Primero");
  setTimeout(() => {
    console.log("Segundo");
  }, 1000);
}, 1000);

const esperar = (ms) => new Promise(r => setTimeout(r, ms));

const ejecutar = async () => {
  await esperar(1000);
  console.log("Primero");
  await esperar(1000);
  console.log("Segundo");
};

ejecutar();
