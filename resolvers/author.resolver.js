import db from "../_db.js";
export const authorResolver = {
  Query: {
    authors() {
      return db.authors;
    },

    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
};
