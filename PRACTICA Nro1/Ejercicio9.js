const promesa = new Promise((resolve) => {
  setTimeout(() => resolve("Éxito después de 3 segundos"), 3000);
});

promesa.then(msg => console.log(msg));
