const saludo = () => {
  let nombre;
  do {
    nombre = prompt("Ingresa su nombre:");
    if (nombre === null) {
      return;
    }
  } while (nombre === "");

  alert(`Bienvenido ${nombre}`);
};

saludo();
