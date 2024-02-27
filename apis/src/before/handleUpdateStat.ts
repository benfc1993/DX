import type { PlayerStatKeys, PlayerStatValue } from '../types'
import {
  updateHealth,
  updateName,
  updatePosition,
  updateSpeed,
} from './updateStats'

export const handleUpdateStat = <TKey extends PlayerStatKeys>(
  statName: TKey,
  value: PlayerStatValue<TKey>,
) => {
  switch (statName) {
    case 'name':
      updateName(value as string)
      break
    case 'speed':
      updateSpeed(value as number)
    case 'health':
      updateHealth(value as number)
    case 'position':
      updatePosition(value as [number, number])
    default:
      break
  }
}
