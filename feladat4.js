function calculateGrade() {
    let score = document.getElementById('score').value;
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 50) {
        grade = 'C';
    } else if (score >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('grade').textContent = `AZ ön jegye: ${grade}`;
}