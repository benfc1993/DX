import { sortDesc, topPercent } from './maths'

export type Investor = {
  name: string
  balance: number
}

export const giveTopInvestorsMoreMoney = (
  investors: Investor[],
): Investor[] => {
  // const sorted = sortDesc(investors, 'balance')
  const sorted = investors.sort((a, b) => b.balance - a.balance)

  // const topTenPercent = topPercent(sorted, 10)
  const topTenPercent = sorted.slice(0, Math.ceil(sorted.length / 10))

  const newBalances = topTenPercent.map((investor) => ({
    ...investor,
    balance: (investor.balance += 100),
  }))

  return newBalances
}
