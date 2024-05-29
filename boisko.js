document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('boiskoCanvas');
    const ctx = canvas.getContext('2d');

    // Rysowanie boiska
    function drawField() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeRect(0, canvas.height / 3, 100, canvas.height / 3);
        ctx.strokeRect(canvas.width - 100, canvas.height / 3, 100, canvas.height / 3);

        ctx.strokeRect(0, canvas.height / 2 - 50, 10, 100);
        ctx.strokeRect(canvas.width - 10, canvas.height / 2 - 50, 10, 100);
    }

    // Rysowanie piłki
    function drawBall(x, y) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Rysowanie zawodnika
    function drawPlayer(x, y) {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(x - 10, y - 30, 20, 60);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(x, y - 40, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Rysowanie bramki
    function drawGoal(x, y) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y - 50, 10, 100);
        ctx.strokeRect(x - 50, y - 50, 100, 10);
        ctx.strokeRect(x - 50, y + 40, 100, 10);
    }

    // Rysowanie sędziego
    function drawReferee(x, y) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(x - 10, y - 30, 20, 60);
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y - 40, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Rysowanie buta piłkarskiego
    function drawBoot(x, y) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(x - 20, y - 10, 40, 20);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x - 20, y - 10, 10, 5);
        ctx.fillRect(x + 10, y - 10, 10, 5);
    }
       // Wyczyść canvas
       function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
 

    window.drawField = drawField;
    window.drawBall = drawBall;
    window.drawPlayer = drawPlayer;
    window.drawGoal = drawGoal;
    window.drawReferee = drawReferee;
    window.drawBoot = drawBoot;
    window.clearCanvas = clearCanvas;
});
// Pobierz elementy, z którymi będziemy pracować
const footer = document.querySelector('footer');

// Dodajmy obsługę zdarzeń dla znikania i pojawiania się stopki
footer.addEventListener('mouseenter', () => {
    footer.style.display = 'none';
});

footer.addEventListener('mouseleave', () => {
    footer.style.display = 'block';
});
