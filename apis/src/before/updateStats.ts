import { playerStats } from '../playerStats'
import type { PlayerStat } from '../types'

const updateStat = <TValue>(stat: PlayerStat<TValue>, value: TValue) => {
  try {
    const newValue = stat.schema.parse(value)

    return stat.updateValue(newValue)
  } catch (err) {
    return null
  }
}

export const updateHealth = (value: number) => {
  const stat = playerStats.health
  return updateStat(stat, value)
}

export const updateSpeed = (value: number) => {
  const stat = playerStats.speed
  return updateStat(stat, value)
}

export const updateName = (value: string) => {
  const stat = playerStats.name
  return updateStat(stat, value)
}

export const updatePosition = (value: [number, number]) => {
  const stat = playerStats.position
  return updateStat(stat, value)
}
