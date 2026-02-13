import type { PropsWithChildren } from "react";

export function Checkbox(props: PropsWithChildren) {
  const id = Math.random() * Math.random();
  return (
    <div className="flex gap-2">
      <input type="checkbox" id={`checkbox-${id}`} />
      {
        props.children &&
        <label htmlFor={`checkbox-${id}`}>{props.children}</label>
      }
    </div>
  );
}