export type DropdownOption = {
  label: string;
  value: any;
}

interface DropdownProps {
  options: DropdownOption[];
  onClickOption?: (value: DropdownOption) => void;
}

export function Dropdown(props: DropdownProps) {


  return (
    <>
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
              onClick={(evt) => {
                evt.preventDefault();

                if(props.onClickOption) {
                  props.onClickOption(opt);
                } 
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
