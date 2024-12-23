// Games.js
export class Games {
  async getApi(endpoint) {
    const loading = document.getElementById("loading");
    try {
      loading.classList.replace("d-none", "d-flex");
      let res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/${endpoint}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1b5454c7d6msh76e6e16f3ade21bp1f8a7ajsn530791d995dc",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      if (res.ok) {
        return await res.json();
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.classList.replace("d-flex", "d-none");
    }
  }

  async getGames(category = "mmorpg") {
    return await this.getApi(`games?category=${category}`);
  }
}
