export const add = (lhs: number, rhs: number) => {
  return lhs + rhs
}

export const multiply = (lhs: number, rhs: number) => {
  return lhs * rhs
}

export const sortDesc = <TObject extends object>(
  values: TObject[],
  sortKey: keyof TObject,
) => {
  return [...values].sort(
    (a, b) => (b[sortKey] as number) - (a[sortKey] as number),
  )
}

export const topPercent = <TObject extends object>(
  values: TObject[],
  percentage: number,
) => {
  return values.slice(0, Math.floor((values.length * percentage) / 100))
}
