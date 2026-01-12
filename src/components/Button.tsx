export function Button(props: { value: string; outlined?: boolean }) {
  return (
    <button
      className={`
    ${
      props.outlined
        ? "bg-transparent border-[var(--primary)] text-[var(--primary)] hover:text-white "
        : "bg-[var(--primary)] border-transparent text-white"
    }
    hover:bg-[var(--primary-hover)]
    w-full py-4 px-10 rounded-lg shadow-lg border
    `}
    >
      {props.value}
    </button>
  );
}
