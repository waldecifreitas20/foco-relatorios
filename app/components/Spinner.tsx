export function AnimatedSpinner({animate}: {animate?: boolean}) {
  return (
    <div
      className={`
      inline-block rounded-full 
      border-3 w-4 h-4
      shrink-0 border-slate-500 border-b-slate-300

      ${animate ? "animate-spin": ""}
      `}
    ></div>
  );
}
