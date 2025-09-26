const funcionConCallback = (cb) => cb("Hola desde callback");

const callbackAPromesa = () => {
  return new Promise((resolve) => {
    funcionConCallback(resolve);
  });
};

callbackAPromesa().then(console.log);
