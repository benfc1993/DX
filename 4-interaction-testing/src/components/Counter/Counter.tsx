import { useState } from 'react'

interface CounterProps {
  onCountChanged?: (count: number) => void
}

export function Counter(props: CounterProps) {
  const { onCountChanged } = props

  const [count, setCount] = useState(0)

  return (
    <div>
      <p data-testid="count-text">{count}</p>
      <button
        data-testid="count-button"
        onClick={() =>
          setCount((curr) => {
            onCountChanged?.(curr + 1)
            return curr + 1
          })
        }
      >
        Increment
      </button>
    </div>
  )
}
