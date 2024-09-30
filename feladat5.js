function checkLeapYear() {
let year = document.getElementById('year').value;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
} else {
        isLeapYear = false;
    }
document.getElementById('eredmeny').textContent = isLeapYear ? `${year} szökőév.` : `${year} nem szökőév.`;
}
