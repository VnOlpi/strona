// Dane drużyn
const teamsData = [
    
        { position: 1, team: "Manchester City", matches: 38, wins: 28, draws: 7, losses: 3, goalsFor: 96, goalsAgainst: 34, points: 91, logo: "https://tmssl.akamaized.net/images/wappen/head/281.png?lm=1467356331" },
        { position: 2, team: "Arsenal", matches: 38, wins: 28, draws: 5, losses: 5, goalsFor: 91, goalsAgainst: 29, points: 89, logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
        { position: 3, team: "Liverpool", matches: 38, wins: 24, draws: 10, losses: 4, goalsFor: 86, goalsAgainst: 41, points: 82, logo: "https://tmssl.akamaized.net/images/wappen/head/31.png?lm=1456567819" },
        { position: 4, team: "Aston Villa", matches: 38, wins: 20, draws: 8, losses: 10, goalsFor: 76, goalsAgainst: 61, points: 68, logo: "https://tmssl.akamaized.net/images/wappen/head/405.png?lm=1469443765" },
        { position: 5, team: "Tottenham", matches: 38, wins: 20, draws: 6, losses: 12, goalsFor: 74, goalsAgainst: 61, points: 66, logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg" },
        { position: 6, team: "Chelsea", matches: 38, wins: 18, draws: 9, losses: 11, goalsFor: 77, goalsAgainst: 63, points: 63, logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" },
        { position: 7, team: "Newcastle", matches: 38, wins: 18, draws: 6, losses: 14, goalsFor: 85, goalsAgainst: 62, points: 60, logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg" },
        { position: 8, team: "Manchester Utd", matches: 38, wins: 18, draws: 6, losses: 14, goalsFor: 57, goalsAgainst: 58, points: 60, logo: "https://tmssl.akamaized.net/images/wappen/head/985.png?lm=1457975903" },
        { position: 9, team: "West Ham", matches: 38, wins: 14, draws: 10, losses: 14, goalsFor: 60, goalsAgainst: 74, points: 52, logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg" },
        { position: 10, team: "Crystal Palace", matches: 38, wins: 13, draws: 10, losses: 15, goalsFor: 57, goalsAgainst: 58, points: 49, logo: "https://tmssl.akamaized.net/images/wappen/head/873.png?lm=1457723287" },
        { position: 11, team: "Brighton", matches: 38, wins: 12, draws: 12, losses: 14, goalsFor: 55, goalsAgainst: 62, points: 48, logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg" },
        { position: 12, team: "Bournemouth", matches: 38, wins: 13, draws: 9, losses: 16, goalsFor: 54, goalsAgainst: 67, points: 48, logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg" },
        { position: 13, team: "Fulham", matches: 38, wins: 13, draws: 8, losses: 17, goalsFor: 55, goalsAgainst: 61, points: 47, logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg" },
        { position: 14, team: "Wolves", matches: 38, wins: 13, draws: 7, losses: 18, goalsFor: 50, goalsAgainst: 65, points: 46, logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg" },
        { position: 15, team: "Everton", matches: 38, wins: 13, draws: 9, losses: 16, goalsFor: 40, goalsAgainst: 51, points: 40, logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg" },
        { position: 16, team: "Brentford", matches: 38, wins: 10, draws: 9, losses: 19, goalsFor: 56, goalsAgainst: 65, points: 39, logo: "https://tmssl.akamaized.net/images/wappen/head/1148.png?lm=1625150543" },
        { position: 17, team: "Nottingham", matches: 38, wins: 9, draws: 9, losses: 20, goalsFor: 49, goalsAgainst: 67, points: 32, logo: "https://tmssl.akamaized.net/images/wappen/head/703.png?lm=1598890289" },
        { position: 18, team: "Luton", matches: 38, wins: 6, draws: 8, losses: 24, goalsFor: 52, goalsAgainst: 85, points: 26, logo: "https://tmssl.akamaized.net/images/wappen/head/1031.png?lm=1457723228" },
        { position: 19, team: "Burnley", matches: 38, wins: 5, draws: 9, losses: 24, goalsFor: 41, goalsAgainst: 78, points: 24, logo: "https://tmssl.akamaized.net/images/wappen/head/1132.png?lm=1686818840" },
        { position: 20, team: "Sheffield Utd", matches: 38, wins: 3, draws: 7, losses: 28, goalsFor: 35, goalsAgainst: 104, points: 16, logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg" }

        
];

// Funkcja generująca tabelę
function generateTable() {
    const tableBody = document.querySelector("#premierLeagueTable tbody");
    tableBody.innerHTML = ""; // Wyczyszczenie poprzednich danych

    teamsData.forEach(team => {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.textContent = team.position;
        row.appendChild(positionCell);

        const logoCell = document.createElement("td");
        const logoImg = document.createElement("img");
        logoImg.src = team.logo;
        logoImg.alt = team.team + " logo";
        logoImg.classList.add("logo");
        logoCell.appendChild(logoImg);
        row.appendChild(logoCell);

        const teamCell = document.createElement("td");
        teamCell.textContent = team.team;
        row.appendChild(teamCell);

        const matchesCell = document.createElement("td");
        matchesCell.textContent = team.matches;
        row.appendChild(matchesCell);

        const winsCell = document.createElement("td");
        winsCell.textContent = team.wins;
        row.appendChild(winsCell);

        const drawsCell = document.createElement("td");
        drawsCell.textContent = team.draws;
        row.appendChild(drawsCell);

        const lossesCell = document.createElement("td");
        lossesCell.textContent = team.losses;
        row.appendChild(lossesCell);

        const goalsForCell = document.createElement("td");
        goalsForCell.textContent = team.goalsFor;
        row.appendChild(goalsForCell);

        const goalsAgainstCell = document.createElement("td");
        goalsAgainstCell.textContent = team.goalsAgainst;
        row.appendChild(goalsAgainstCell);

        const pointsCell = document.createElement("td");
        pointsCell.textContent = team.points;
        row.appendChild(pointsCell);

        tableBody.appendChild(row);
    });
}

// Wywołanie funkcji generującej tabelę przy ładowaniu strony
window.onload = generateTable;
// Pobierz elementy, z którymi będziemy pracować
const footer = document.querySelector('footer');

// Dodajmy obsługę zdarzeń dla znikania i pojawiania się stopki
footer.addEventListener('mouseenter', () => {
    footer.style.display = 'none';
});

footer.addEventListener('mouseleave', () => {
    footer.style.display = 'block';
});
