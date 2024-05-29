function showInfo(area) {
    alert('Informacje o obszarze: ' + area);
}

function highlightArea(area) {
    const highlight = document.getElementById('highlight');
    const coords = area.coords.split(',').map(Number);
    let shape = area.shape;

    if (shape === 'rect') {
        const [x1, y1, x2, y2] = coords;
        highlight.style.left = x1 + 'px';
        highlight.style.top = y1 + 'px';
        highlight.style.width = (x2 - x1) + 'px';
        highlight.style.height = (y2 - y1) + 'px';
        highlight.style.borderRadius = '0';
    } else if (shape === 'circle') {
        const [cx, cy, radius] = coords;
        highlight.style.left = (cx - radius) + 'px';
        highlight.style.top = (cy - radius) + 'px';
        highlight.style.width = (radius * 2) + 'px';
        highlight.style.height = (radius * 2) + 'px';
        highlight.style.borderRadius = '50%';
    }

    highlight.style.display = 'block';
}

function removeHighlight() {
    const highlight = document.getElementById('highlight');
    highlight.style.display = 'none';
}
// Pobierz elementy, z którymi będziemy pracować
const footer = document.querySelector('footer');

// Dodajmy obsługę zdarzeń dla znikania i pojawiania się stopki
footer.addEventListener('mouseenter', () => {
    footer.style.display = 'none';
});

footer.addEventListener('mouseleave', () => {
    footer.style.display = 'block';
});
