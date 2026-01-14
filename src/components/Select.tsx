import { useState } from "react";

interface SelectProps {
  options: string[];
  onSelected: (selectedOption: string) => void;
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
      <div
        className="
        flex items-center 
        bg-white 
        w-full block 
        px-4 py-3 
        shadow-lg rounded-lg 
        outline-none 
        "
        onClick={() => setShowOptions((old: boolean) => !old)}
      >
        <input className="outline-none" value={selected} />
      </div>

      {showOptions && (
        <div className="absolute w-full border border-neutral-200 bg-white rounded-b-lg">
          {props.options.map((opt) => {
            return (
              <button
                className="block text-center w-full leading-6 text-sm cursor-pointer hover:bg-neutral-100"
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
