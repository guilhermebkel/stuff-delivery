import Redis, { Redis as RedisInterface } from "ioredis"

import redisConfig from "./config"

export type CacheKey =
"deliveries"

class CacheService {
	redis: RedisInterface

	constructor() {
		this.redis = new Redis(redisConfig)
	}

	async get(key: CacheKey) {
		const cached = await this.redis.get(key)

		if (cached) {
			return JSON.parse(cached)
		} else {
			return null
		}
	}

	/**
	 * 
	 * @param expiration Expiration due in seconds
	 */
	async set(key: CacheKey, value: any, expiration: number = 0) {
		const payload = JSON.stringify(value)

		if (expiration) {
			return await this.redis.set(key, payload, "EX", expiration)
		} else {
			return await this.redis.set(key, payload)
		}
	}

	async invalidate(key: CacheKey) {
		const isKeyInvalidated = await this.redis.del(key)

		if (isKeyInvalidated) {
			return true
		} else {
			return false
		}
	}
}

export default new CacheService()
