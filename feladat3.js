let mass_in_kg = 81.2;
let height_in_m = 1.78;
let bmi = mass_in_kg / (height_in_m * height_in_m);
document.getElementById('bmi').textContent = `BMI: ${bmi}`;
