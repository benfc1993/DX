import { Investor, giveTopInvestorsMoreMoney } from '../refactoring'

const createInvestors = (
  count: number,
  options?: { startIndex: number; startBalance: number },
): Investor[] =>
  Array.from({ length: count }, (_, idx) => {
    const offsetIndex = (options?.startIndex ?? 0) + idx
    const offsetBalance = (options?.startBalance ?? 0) + offsetIndex
    return {
      name: `investor-${offsetIndex}`,
      balance: offsetBalance,
    }
  })

describe('paying investors more', () => {
  it('should increase the top investors balance given ten investors', () => {
    const investors = createInvestors(10)

    const result = giveTopInvestorsMoreMoney(investors)

    expect(result).toStrictEqual([{ name: 'investor-9', balance: 109 }])
  })

  it('should increase the top 5 investors balance given 50 investors', () => {
    const investors = createInvestors(50)
    const expected = createInvestors(5, { startIndex: 45, startBalance: 100 })

    const result = giveTopInvestorsMoreMoney(investors)

    expect(result).toStrictEqual(expect.arrayContaining(expected))
  })

  it('should increase the top 3 investors balance given 31 investors', () => {
    const investors = createInvestors(31)
    const expected = createInvestors(3, { startIndex: 28, startBalance: 100 })

    const result = giveTopInvestorsMoreMoney(investors)

    expect(result).toStrictEqual(expect.arrayContaining(expected))
  })
})
