import redis from "redis";

const client = redis.createClient({
  url: "redis://localhost:6379",
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("error", (error) => {
  console.error(error);
});
//connect to redis
(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  }
})();
export default client;
