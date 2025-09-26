const promesa = Promise.resolve("Hola");

promesa.then(res => {
  const callback = (msg) => console.log("Callback:", msg);
  callback(res);
});
