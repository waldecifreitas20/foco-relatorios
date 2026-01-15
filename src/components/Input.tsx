interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?:string;
  label?: string;
  onClick?: () => void;
}

export function Input(props: InputProps) {
  return (
    <div className="w-full">
      {props.label && <p>{props.label}: </p>}
      <input
        name={props.name ?? ""}
        type={props.type ?? "text"}
        value={props.value}
        className="
        bg-white 
        border border-neutral-200 
        w-full block 
        px-4 py-3 
        shadow-lg rounded-lg 
        outline-none"
        placeholder={props.placeholder ?? ""}
        onClick={() => props.onClick!()}
      />
    </div>
  );
}
