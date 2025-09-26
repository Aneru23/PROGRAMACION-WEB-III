const promesa = new Promise((resolve) => {
  setTimeout(() => resolve("Hecho!"), 1000);
});

promesa.then(console.log);

const ejecutar = async () => {
  let r = await promesa;
  console.log(r);
};

ejecutar();
