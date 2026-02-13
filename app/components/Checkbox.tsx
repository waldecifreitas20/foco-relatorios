import type { PropsWithChildren } from "react";

interface CheckboxProps extends PropsWithChildren {
  value: string;
  name: string;
}

export function Checkbox(props: CheckboxProps) {
  const id = Math.random() * Math.random();
  return (
    <div className="flex gap-2 text-neutral-600">
      <input
        type="checkbox"
        name={props.name}
        id={`checkbox-${id}`}
        value={props.value} />
      {
        props.children &&
        <label htmlFor={`checkbox-${id}`}>{props.children}</label>
      }
    </div>
  );
}