function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
  
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  
    if (fechaActual.getMonth() < fechaNacimientoDate.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoDate.getMonth() &&
          fechaActual.getDate() < fechaNacimientoDate.getDate())) {
      edad--;
    }
  
    return edad;
  }
  const fechaNacimiento = prompt("Ingresa tu Fecha de nacimineto YYYY-MM-DD"); // Formato YYYY-MM-DD
  const edad = calcularEdad(fechaNacimiento);
  console.log("Edad:", edad);
  