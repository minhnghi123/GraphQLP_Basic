import redisClient from "../config/redis.config.js";

const defaultExpiration = 3600; // 1 hour

//save to redis
export const setCache = async (key, value) => {
  try {
    await redisClient.setEx(key, defaultExpiration, JSON.stringify(value));
    console.log("cache updated !");
  } catch (error) {
    console.error(error);
  }
};
//get data from redis
export const getCache = async (key) => {
  try {
    const value = await redisClient.get(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
  }
};
// delete cache by key
export const delCache = async (key) => {
  try {
    await redisClient.del(key);
    console.log(`Cache deleted for key: ${key}`);
  } catch (err) {
    console.error("Error deleting cache:", err);
  }
};
