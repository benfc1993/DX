interface NamesListProps {
  names: string[]
}

export function NamesList(props: NamesListProps) {
  const { names } = props

  if (names.length === 0) {
    return <p data-testid="names-empty">No names</p>
  }
  return (
    <div>
      {names.map((name) => (
        <p key={name} data-testid={`name-${name}`}>
          {name}
        </p>
      ))}
    </div>
  )
}
