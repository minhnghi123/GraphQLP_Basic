import { gameResolver } from "./game.resolver.js";
import { authorResolver } from "./author.resolver.js";
import { reviewResolver } from "./review.resolver.js";

const resolvers = [gameResolver, authorResolver, reviewResolver];
export default resolvers;
