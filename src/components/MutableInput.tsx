import { useEffect, useState, type InputHTMLAttributes } from "react";


interface MutableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  blocked?: boolean;
}

export function MutableInput(props: MutableInputProps) {
  const [state, setState] = useState(props.value);

  useEffect(() => {
    setState(props.value);
  }, [props.value])

  return (
    <div>
      {props.label && (
        <p>
          {props.label}{props.required && <span className="text-red-500">*</span>}:
          {props.blocked && <i className="ml-1 fa-solid fa-lock fa-xs"></i>}
        </p>
      )}

      <input
        {...props}
        value={state}
        onChange={(evt) => setState(evt.target.value)}
        className={`
          bg-white
        border border-neutral-200 
        w-full block 
        px-4 py-3 rounded-lg 
        outline-none
        focus:border-red-500
        `}
      />
    </div>
  );


}