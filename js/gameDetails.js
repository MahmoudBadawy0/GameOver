// GameDetails.js
export class GameDetails {
  constructor(UI, Games) {
    this.ui = UI;
    this.games = Games;
  }

  // Fetch game details from the API
  async getGameDetails(id) {
    const gameData = await this.games.getApi(`game?id=${id}`);
    return gameData;
  }

  // Display the game details
  async showGameDetails(id) {
    const gameData = await this.getGameDetails(id);
    this.ui.displayGameDetails(gameData);
  }
}
