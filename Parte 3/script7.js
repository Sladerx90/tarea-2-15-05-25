function calcularPropinaTradicional(montoCuenta, porcentajePropina) {
    const montoPropina = montoCuenta * (porcentajePropina / 100);
    const totalPagar = montoCuenta + montoPropina;
  
    return {
      montoPropina: montoPropina,
      totalPagar: totalPagar,
    };
  }
  
  const resultadoTradicional = calcularPropinaTradicional(100, 15);
  console.log("Función Tradicional:", resultadoTradicional);
 
  const calcularPropinaFlecha = (montoCuenta, porcentajePropina) => {
    const montoPropina = montoCuenta * (porcentajePropina / 100);
    const totalPagar = montoCuenta + montoPropina;
  
    return {
      montoPropina: montoPropina,
      totalPagar: totalPagar,
    };
  };
  
  const resultadoFlecha = calcularPropinaFlecha(100, 20);
  console.log("Función Flecha:", resultadoFlecha);
  
  