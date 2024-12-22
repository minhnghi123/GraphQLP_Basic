import db from "../_db.js";
export const reviewResolver = {
  Query: {
    reviews() {
      return db.reviews;
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
};
