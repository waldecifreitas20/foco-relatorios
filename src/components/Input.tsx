interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?:string;
  onClick?: () => void;
}

export function Input(props: InputProps) {
  return (
    <>
      <input
        name={props.name ?? ""}
        type={props.type ?? "text"}
        value={props.value}
        className="bg-white w-full block px-4 py-3 shadow-lg rounded-lg outline-none"
        placeholder={props.placeholder}
        onClick={() => props.onClick!()}
      />
    </>
  );
}
