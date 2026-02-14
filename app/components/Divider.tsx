interface DividerProps {
  spaceTop?: number;
  spaceBottom?: number;
}

export function Divider({ spaceTop = 2, spaceBottom = 2 }: DividerProps) {
  return <div className="border-b border-neutral-200 block w-full
  "
    style={{
      marginTop: `${spaceTop}rem`,
      marginBottom: `${spaceBottom}rem`,
    }}
  ></div>
}