import { playerStats } from '../playerStats'
import type { PlayerStatValue } from '../types'

export function updateStat<TKey extends keyof typeof playerStats>(
  playerStat: TKey,
  value: PlayerStatValue<TKey>,
) {
  const stat = playerStats[playerStat]

  try {
    stat.schema.parse(value)

    return stat.updateValue(value)
  } catch (err) {
    return null
  }
}
