interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
}

export function Input(props: InputProps) {
  return (
    <>
      <input
        type={props.type ?? "text"}
        className="bg-white w-full block p-4 shadow-lg rounded-lg outline-none"
        placeholder={props.placeholder}
      />
    </>
  );
}
