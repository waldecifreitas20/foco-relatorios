import { useState } from "react";

interface SelectProps {
  options: string[];
  onSelected: (selectedOption: string) => void;
  label: string;
}

export function Select(props: SelectProps) {
  const [selected, setSelected] = useState(props.options[0]);
  const [showOptions, setShowOptions] = useState(false);

  function handleSelected(option: string) {
    setSelected(option);
    setShowOptions(false);
    props.onSelected(option);
  }

  return (
    <div className="relative">
      <p>{props.label}: </p>
      <div
        className="
        flex items-center 
        bg-white gap-2
        w-fit block 
        px-2 py-3 
        shadow-lg rounded-lg 
        outline-none 
        "
        onClick={() => setShowOptions((old: boolean) => !old)}
      >
        <input className="outline-none" value={selected} />
      </div>

      {showOptions && (
        <div className="absolute shadow-xl w-full border border-neutral-200 bg-white rounded-b-lg">
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
  );
}
