let h = 10.4;
let sz = 13.5;
let m = 8.2;
let felszin = 2 * (h * sz + sz * m + m * h);
let terfogat = h * sz * m;
document.getElementById('felszin').textContent = `Felszín: ${felszin}`;
document.getElementById('terfogat').textContent = `Térfogat: ${terfogat}`;
