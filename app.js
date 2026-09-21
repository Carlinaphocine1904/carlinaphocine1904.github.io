const schedule = [
  { date: "Sep 26", home: "Team 01", away: "Team 02", time: "7:00 PM", week: "Week 1" },
  { date: "Sep 26", home: "Team 03", away: "Team 04", time: "8:00 PM", week: "Week 1" },
  { date: "Sep 27", home: "Team 05", away: "Team 06", time: "7:00 PM", week: "Week 1" },
  { date: "Sep 27", home: "Team 07", away: "Team 08", time: "8:00 PM", week: "Week 1" }
];

const teams = Array.from({ length: 32 }, (_, i) => `Team ${String(i + 1).padStart(2, "0")}`);

function initials(name) {
  return name.replace("Team ", "T");
}

function renderSchedule(items = schedule) {
  const el = document.getElementById("schedule-list");
  el.innerHTML = items.map(game => `
    <article class="game-card">
      <div class="game-date">${game.date}<br><span>${game.week}</span></div>
      <div class="matchup">
        <span class="team-chip">${initials(game.home)}</span>
        <span>${game.home}</span>
        <span class="vs">VS</span>
        <span>${game.away}</span>
        <span class="team-chip">${initials(game.away)}</span>
      </div>
      <div class="game-meta">
        <strong>${game.time}</strong>
        <span>Football Fusion</span>
      </div>
    </article>
  `).join("");
}

function showAllSchedule() {
  renderSchedule(schedule);
  document.getElementById("schedule").scrollIntoView({ behavior: "smooth" });
}

function renderTeams() {
  document.getElementById("teams-grid").innerHTML = teams.map((team, i) => `
    <article class="team-card">
      <strong>${team}</strong>
      <span>VFA • ${String(i + 1).padStart(2, "0")}</span>
    </article>
  `).join("");
}

function renderStandings() {
  document.getElementById("standings-body").innerHTML = teams.slice(0, 10).map((team, i) => `
    <tr>
      <td class="rank">${i + 1}</td>
      <td><strong>${team}</strong></td>
      <td>0</td><td>0</td><td>0</td><td>0</td>
    </tr>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderSchedule();
renderTeams();
renderStandings();
