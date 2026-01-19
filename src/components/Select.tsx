import { useEffect, useState } from "react";
import { Input } from "./Input";

interface SelectProps {
  options: string[];
  label: string;
  name: string;
  value?: string;
}

export function Select(props: SelectProps) {
  const [selected, setSelected] = useState(props.value);
  const [showOptions, setShowOptions] = useState(false);

  function handleSelected(option: string) {
    setSelected(option);
    setShowOptions(false);
  }

  useEffect(() => {
    document.addEventListener("keyup", (evt: any) => {
      if (evt.key === "Escape") {
        setShowOptions(false);
      }
    });
  }, []);

  return (
    <>
      {showOptions && (
        <div
          onClick={() => setShowOptions(false)}
          className="size-screen absolute inset-0 bg-transparent z-10"
        ></div>
      )}

      <div className="relative w-full">
        <p>{props.label}: </p>
        <Input
          name={props.name}
          value={selected ?? props.value}
          onClick={() => setShowOptions((old) => !old)}
        />

        {showOptions && (
          <div className="absolute shadow-xl w-full border border-neutral-200 bg-white rounded-b-lg z-100">
            {props.options.map((opt) => {
              return (
                <button
                  className="
              block text-left 
              w-full py-1 px-2
              text-sm cursor-pointer 
              hover:bg-neutral-100
              font-light border-t border-neutral-200
              "
                  onClick={() => handleSelected(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
