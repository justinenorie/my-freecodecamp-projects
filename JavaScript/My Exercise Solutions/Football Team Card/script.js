const footballTeam = {
  team: "Aye",
  year: 2025,
  headCoach: "Player 0",
  players: [
    { name: "Player 1", position: "forward", isCaptain: true },
    { name: "Player 2", position: "midfielder", isCaptain: false },
    { name: "Player 3", position: "defender", isCaptain: false },
    { name: "Player 4", position: "goalkeeper", isCaptain: false },
    { name: "Player 5", position: "forward", isCaptain: false },
    { name: "Player 6", position: "midfielder", isCaptain: false }
  ]
};

const teamName = document.getElementById("team");
const year = document.getElementById("year");
const coachName = document.getElementById("head-coach");
const playerFilters = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

teamName.textContent = footballTeam.team;
year.textContent = footballTeam.year;
coachName.textContent = footballTeam.headCoach;

playerFilters.value = "all";
window.addEventListener("DOMContentLoaded", () => {
  playerFilters.dispatchEvent(new Event("change"));
});

playerFilters.addEventListener("change", (e) => {
  const selectedOption = e.target.value;

  const filtered = footballTeam.players.filter(players =>
    selectedOption === "all" || players.position === selectedOption
  );

  playerCards.innerHTML = filtered
    .map(players => `
        <div class="player-card">
          <h2>${players.isCaptain ? "(Captain)" : ""}  ${players.name}</h2>
          <p>Position: ${players.position}</p>
        </div>
      `).join("");
});