document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('player-card-form');
    const resultDiv = document.getElementById('player-card-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const speed = parseInt(document.getElementById('speed').value);
        const shooting = parseInt(document.getElementById('shooting').value);
        const passing = parseInt(document.getElementById('passing').value);
        const dribbling = parseInt(document.getElementById('dribbling').value);
        const defending = parseInt(document.getElementById('defending').value);
        const physical = parseInt(document.getElementById('physical').value);

        if (isNaN(speed) || isNaN(shooting) || isNaN(passing) || isNaN(dribbling) || isNaN(defending) || isNaN(physical)) {
            resultDiv.innerHTML = `<p>Wprowadź wszystkie oceny w zakresie od 0 do 100.</p>`;
            return;
        }

        const averageRating = Math.round((speed + shooting + passing + dribbling + defending + physical) / 6);

        resultDiv.innerHTML = `
            <div class="card">
                <img src="fifa_card_template.png" alt="FIFA Card">
                <div class="rating">${averageRating}</div>
                <div class="name">${name}</div>
                <div class="stats">
                    <div>PAC: ${speed}</div><div>DRI: ${dribbling}</div>
                    <div>SHO: ${shooting}</div><div>DEF: ${defending}</div>
                    <div>PAS: ${passing}</div><div>PHY: ${physical}</div>
                </div>
            </div>
        `;
    });
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
