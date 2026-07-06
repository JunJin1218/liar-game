import Redis from 'ioredis'
import type { RedisRoom } from '@/types/redis'
import { redisRoomSchema } from '../shared/schema'

const redis = process.env.REDIS_URL
  ? new Redis(process.env.REDIS_URL)
  : new Redis({
      password: process.env.REDIS_PASSWORD || undefined,
    })

export default redis

// Data manipulations

export const setRoom = async (room: RedisRoom) => {
  await redis.set(`liarGame:room:${room.id}`, JSON.stringify(room))
}

export const deleteRoom = async (roomId: string) => {
  await redis.del(`liarGame:room:${roomId}`)
}

export const getRoom = async (roomId: string): Promise<RedisRoom | null> => {
  const roomData = await redis.get(`liarGame:room:${roomId}`)

  if (!roomData) {
    return null
  }

  try {
    const jsonParsed = JSON.parse(roomData)
    const room = redisRoomSchema.parse(jsonParsed)

    return room
  } catch (err) {
    console.error(err)

    await deleteRoom(roomId)
    return null
  }
}
