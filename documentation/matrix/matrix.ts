export interface Matrix {
  data: number[][]
  dimentions: [number, number]
  identity: number[][]
  /**
   * Scale a matrix by a scalar float
   * @example
   *
   * ```ts
   *    const scaledMatrix = matrix.scale(2)
   * ```
   */
  scale(scalar: number): Matrix
  /**
   * Dot product of two matrices
   * @example
   *
   * ```ts
   *    const dotProduct = matrix.dot(otherMatrix)
   * ```
   */
  dot(otherMatrix: Matrix): Matrix
}

/**
 * Creates a matrix.
 *
 * @param data The initial data, this will also set the dimensions.
 *
 * @example
 * create a 2x2 matrix
 *
 * ```ts
 *  const matrix = await createMatrix([[1,2],[3,4]])
 * ```
 *
 * All methods will return a new matrix of the result
 *
 */
export function createMatrix(data: number[][]): Matrix {
  if (data.length === 0) throw new Error('matrix must have size greater than 0')
  const dim1 = data[0].length
  for (const row of data) {
    if (row.length !== dim1) throw new Error('All rows must be the same size')
  }
  return {
    data,
    get dimentions() {
      const dims: [number, number] = [data.length, data[0].length]
      return dims
    },
    get identity() {
      return Array.from(Array(this.dimentions[0]), () =>
        new Array(this.dimentions[1]).fill(0),
      ).map((row: number[], i) => row.map((_, j) => (i === j ? 1 : 0)))
    },
    scale(scalar: number) {
      return scale(this, scalar)
    },
    dot(otherMatrix: Matrix) {
      return dot(this, otherMatrix)
    },
  }
}
function scale(_arg0: Matrix, _scalar: number): Matrix {
  throw new Error('Function not implemented.')
}

function dot(_matrix: Matrix, _otherMatrix: Matrix): Matrix {
  throw new Error('Function not implemented.')
}
