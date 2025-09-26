const saludar = (callback) => {
  setTimeout(() => {
    callback("Hola después de 2 segundos");
  }, 2000);
};

saludar((msg) => console.log(msg));
