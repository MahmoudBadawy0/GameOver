// UI.js
export class UI {
  constructor() {
    this.gamesDataDiv = document.getElementById("gamesData");
    this.gamesDetails = document.getElementById("details");
    this.gameDetails = document.getElementById("gameDetails");
    this.games = document.getElementById("games");
  }

  displayGames(gamesData) {
    let temp = "";
    for (const game of gamesData) {
      temp += `         
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="h-100 card border-1 cursor-pointer  border-black bg-transparent" data-id="${
            game.id
          }">
            <div class="card-body mb-0">
              <img class="card-img-top" src="${game.thumbnail}" alt="${
        game.title
      }">
              <div class="mt-3">
                <div class="mb-2 d-flex justify-content-between align-items-center">
                  <h3 class="fs-5 m-0">${game.title}</h3>
                  <span class="badge text-bg-primary">Free</span>
                </div>
                <p class="text-center small text-light opacity-50 mb-0">${
                  game.short_description
                }</p>
              </div>
            </div>
            <div class="card-footer overflow-hidden border-black d-flex justify-content-between align-items-center">
              <span class="badge text-bg-secondary">${game.genre}</span>
              <span class="badge text-bg-secondary">${game.platform
                .split(",")
                .join("<br>")}</span>
            </div>
          </div>
        </div>`;
    }
    this.gamesDataDiv.innerHTML = temp;
  }

  displayGameDetails(gameData) {
    this.games.classList.replace("d-block", "d-none");
    this.gamesDetails.classList.replace("d-none", "d-flex");

    let temp = `
      <div class="col-md-4">
        <img class="w-100 mt-2" src="${gameData.thumbnail}" alt="Game Image">
      </div>
      <div class="col-md-8">
        <div class="text-light">
          <div class="h3">Title: ${gameData.title}</div>
          <div class="d-flex align-items-center column-gap-2 mb-3">Category: <span class="badge text-bg-info">${gameData.genre}</span></div>
          <div class="d-flex align-items-center column-gap-2 mb-3">Platform: <span class="badge text-bg-info">${gameData.platform}</span></div>
          <div class="d-flex align-items-center column-gap-2 mb-3">Status: <span class="badge text-bg-info">${gameData.status}</span></div>
          <p>${gameData.description}</p>
          <a class="btn btn-outline-warning" href="${gameData.game_url}" target="_blank">Show Game</a>
        </div>
      </div>
    `;
    this.gameDetails.innerHTML = temp;
  }

  closeDetails() {
    this.gamesDetails.classList.replace("d-flex", "d-none");
    this.games.classList.replace("d-none", "d-block");
  }
}
