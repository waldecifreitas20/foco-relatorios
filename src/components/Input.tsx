interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  label?: string;
  readOnly?: boolean;
  onClick?: () => void;
}

export function Input(props: InputProps) {
  return (
    <div className="w-full">
      {props.label && (
        <p>
          {props.label}:
          {props.readOnly && <i className="ml-1 fa-solid fa-lock fa-xs"></i>}
        </p>
      )}
      <input
        readOnly={props.readOnly}
        name={props.name ?? ""}
        type={props.type ?? "text"}
        defaultValue={props.value}
        className={`
        ${
          props.readOnly
            ? "bg-slate-100 cursor-not-allowed"
            : "bg-white "
        }
        border border-neutral-200 
        w-full block 
        px-4 py-3 
        shadow-lg rounded-lg 
        outline-none
          `}
        placeholder={props.placeholder ?? ""}
        onClick={() => props.onClick!()}
      />
    </div>
  );
}
