import db from "../_db.js";
export const gameResolver = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      const newGame = {
        ...args.game,
        id: String(db.games.length + 1),
      };
      db.games.push(newGame);
      return newGame;
    },
    updateGame(_, args) {
      const gameIndex = db.games.findIndex((game) => game.id === args.id);
      if (gameIndex === -1) {
        throw new Error("Game not found");
      }
      db.games[gameIndex] = {
        ...db.games[gameIndex],
        ...args.game,
      };
      return db.games[gameIndex];
    },
  },
};
