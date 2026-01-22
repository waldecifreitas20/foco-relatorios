import { useEffect, useState } from "react";
import { Input } from "./Input";

interface SelectProps {
  options: {
    label: string;
    value: any;
  }[];
  label: string;
  name: string;
  value?: string;
  required?: boolean;
  inputEnable?: boolean;
  onTyping?: (value: string) => void;
  onSelect?: (option: any) => void;
}

export function Select(props: SelectProps) {
  const [selected, setSelected] = useState(props.value);
  const [showOptions, setShowOptions] = useState(false);


  function handleSelected(option: string) {
    setSelected(option);
    setShowOptions(false);

    if (props.onSelect) {
      props.onSelect(option);
    }
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
        <p>
          {props.label}
          {props.required && <span className="text-red-500">*</span>}:{" "}
        </p>
        <Input
          readOnly={!props.inputEnable}
          required={props.required}
          name={props.name}
          value={selected ?? props.value}
          onChange={(evt) =>
            props.inputEnable &&
            props.onTyping &&
            props.onTyping(evt.target.value)
          }
          onClick={() => setShowOptions((old) => !old)}
        />

        {showOptions && (
          <div className="absolute w-full border border-neutral-200 bg-white rounded-b-lg z-100">
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
                  onClick={() => handleSelected(opt.value)}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
