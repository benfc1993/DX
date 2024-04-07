import { Investor, giveTopInvestorsMoreMoney } from '../refactoring'
import * as maths from '../maths'

const spySortDesc = jest.spyOn(maths, 'sortDesc')
const spyTopPercent = jest.spyOn(maths, 'topPercent')

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
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should sort the investors by balance', () => {
    const investors = createInvestors(10)

    giveTopInvestorsMoreMoney(investors)
    expect(spySortDesc).toHaveBeenCalledWith(investors, 'balance')
  })
  it('should split to top 10% of the investors', () => {
    const investors = createInvestors(10)

    giveTopInvestorsMoreMoney(investors)
    expect(spyTopPercent).toHaveBeenCalledWith(
      expect.arrayContaining(investors),
      10,
    )
    expect(spyTopPercent).toHaveReturnedWith(
      expect.arrayContaining([{ name: 'investor-9', balance: 109 }]),
    )
  })
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
