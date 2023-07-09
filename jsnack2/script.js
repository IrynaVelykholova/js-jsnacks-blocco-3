const numeri = [];

for (let i = 0; i < 25; i++) {
  const numeroRandom = Math.floor(Math.random() * 40) + 1;
  numeri.push(numeroRandom); //metto in arrey
  console.log(numeri);
  
  if (numeroRandom % 2 === 0) { 
    document.getElementById("dispari").innerHTML += ` ${numeroRandom}; `;
  } else if (numeroRandom % 2 !== 0) { 
    document.getElementById("pari").innerHTML += ` ${numeroRandom}; `;
  }
}

