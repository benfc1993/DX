import { z } from 'zod'
import { PlayerStat } from './types'

const health: PlayerStat<number> = {
  defaultValue: 0,
  schema: z.number(),
  value: 0,
  updateValue(newValue) {
    this.value = newValue
    return this.value
  },
}

const speed: PlayerStat<number> = {
  defaultValue: 10,
  schema: z.number().min(3).max(50),
  value: 0,
  updateValue(newValue) {
    this.value = newValue
    return this.value
  },
}

const name: PlayerStat<string> = {
  defaultValue: 'Unnamed',
  schema: z.string(),
  value: 'Unnamed',
  updateValue(newValue) {
    this.value = newValue
    return this.value
  },
}

const position: PlayerStat<[number, number]> = {
  defaultValue: [0, 0],
  schema: z.tuple([z.number(), z.number()]),
  value: [0, 0],
  updateValue(newValue) {
    this.value = newValue
    return this.value
  },
}

export const playerStats = {
  health,
  speed,
  name,
  position,
} as const
