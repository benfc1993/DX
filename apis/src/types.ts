import type { ZodSchema } from 'zod/lib/types'
import type { playerStats } from './before/playerStats'

export interface PlayerStat<T> {
  defaultValue: T
  value: T
  schema: ZodSchema<T>
  updateValue: <TValue = T>(newValue: TValue) => TValue
}

export type PlayerStatKeys = keyof typeof playerStats

export type PlayerStatValue<TKey extends PlayerStatKeys> =
  (typeof playerStats)[TKey]['value']
