const tarea1 = () => Promise.resolve("Tarea 1 ok");
const tarea2 = () => Promise.resolve("Tarea 2 ok");

const ejecutar = async () => {
  let r1 = await tarea1();
  console.log(r1);
  let r2 = await tarea2();
  console.log(r2);
};

ejecutar();
