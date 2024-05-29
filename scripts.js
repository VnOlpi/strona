document.addEventListener('DOMContentLoaded', function() {
    // Zegar i data
    function updateDateTime() {
        document.getElementById('datetime').innerText = new Date().toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Licznik odwiedzin
    function updateCounter() {
        const referrer = document.referrer;
        const host = window.location.host;
        
        // Check if the referrer is not from the same host
        if (referrer && !referrer.includes(host)) {
            let counter = localStorage.getItem('page_counter');
            if (counter === null) {
                counter = 0;
            }
            counter++;
            localStorage.setItem('page_counter', counter);
        }

        const counter = localStorage.getItem('page_counter');
        document.getElementById('counter').innerText = `Licznik odwiedzin: ${counter || 0}`;
    }
    updateCounter();

    // Czas spędzony na stronie
    let timeSpent = sessionStorage.getItem('time_spent');
    if (timeSpent === null) {
        timeSpent = 0;
    }

    function updateTimeSpent() {
        timeSpent++;
        sessionStorage.setItem('time_spent', timeSpent);
        document.getElementById('time-spent').innerText = `Czas spędzony na stronie: ${timeSpent} sekundy`;
    }
    setInterval(updateTimeSpent, 1000);

    // Rysowanie na canvasie
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 180, 180);
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
