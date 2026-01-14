interface InputProps {
  type?: string;
  placeholder: string;
  
}

export function Input(props: InputProps) {
  return (
    <>
      <input
        type={props.type ?? "text"}
        className="bg-white w-full block px-4 py-3 shadow-lg rounded-lg outline-none"
        placeholder={props.placeholder}
      />
    </>
  );
}
