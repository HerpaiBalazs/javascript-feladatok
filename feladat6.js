function gyoztes() {
    let player2 = parseInt(document.getElementById('player2').value);
    let result;

    if (player1 === player2) {
        result = "Döntetlen.";
    } else if ((player1 === 1 && player2 === 3) || (player1 === 2 && player2 === 1) || (player1 === 3 && player2 === 2)) {
        result = "Player 1 nyer.";
    } else {
        result = "Player 2 nyer.";
    }
    document.getElementById('nyertes').textContent = result; 
}

