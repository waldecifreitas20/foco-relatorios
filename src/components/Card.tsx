interface CardProps {
  label: string;
  value: number;
  large?: boolean;
}

export function Card(props: CardProps) {
  return (
    <>
      <div
        className="
        bg-white border border-neutral-200
        flex flex-col 
        justify-between py-8 p-2 
        font-medium 
        w-full 
        rounded-lg text-center">
        <p>{props.label}</p>
        <p className={`${props.large ? 'text-6xl': 'text-4xl'} text-[var(--primary)]`}>{props.value}</p>
      </div>
    </>
  );
}