let ora = 14;
let perc = 34;
let masodperc = 42;
let osszmp = 24 * 60 * 60;

let eltelt = (ora * 60 * 60) + (perc * 60) + masodperc;
let hatralevo = osszmp - eltelt;
document.getElementById('remaining').textContent = `Hátralevő másodpercek: ${hatralevo}`;