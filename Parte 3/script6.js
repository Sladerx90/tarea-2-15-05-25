// --- Conversión de Celsius a Fahrenheit ---

// Sintaxis tradicional
function cToF(c) {
    return (c * 9) / 5 + 32;
  }
  
  // Sintaxis flecha
  const cToFFlecha = (c) => (c * 9) / 5 + 32;
  
  
  // --- Conversión de Fahrenheit a Celsius ---
  
  // Sintaxis tradicional
  function fToC(f) {
    return (f - 32) * 5 / 9;
  }
  
  // Sintaxis flecha
  const fToCFlecha = (f) => (f - 32) * 5 / 9;
  
  
  // --- Ejemplos de uso ---
  console.log(`25°C son ${cToF(25)}°F`);
  console.log(`32°F son ${fToC(32)}°C`);
  
  console.log(`Con flecha: 10°C son ${cToFFlecha(10)}°F`);
  console.log(`Con flecha: 50°F son ${fToCFlecha(50)}°C`);