// main.js
import { UI } from "./ui.js";
import { Games } from "./game.js";
import { GameDetails } from "./gameDetails.js";

// Initialize the classes
const ui = new UI();
const games = new Games();
const gameDetails = new GameDetails(ui, games);

const navLinks = document.querySelectorAll(".nav-link");
const gamesDataDiv = document.getElementById("gamesData");

navLinks.forEach((item) => {
  item.addEventListener("click", async function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
    gamesDataDiv.innerHTML = "";
    const category = item.dataset.category || "mmorpg";
    const gamesData = await games.getGames(category);
    ui.displayGames(gamesData);
  });
});

gamesDataDiv.addEventListener("click", async function (e) {
  if (e.target.closest(".card")) {
    let Id = e.target.closest(".card").dataset.id;
    await gameDetails.showGameDetails(Id);
  }
});

document
  .getElementById("closeDetails")
  .addEventListener("click", () => ui.closeDetails());

document.addEventListener("DOMContentLoaded", async () => {
  const gamesData = await games.getGames(); // default category is mmorpg
  ui.displayGames(gamesData);
});
