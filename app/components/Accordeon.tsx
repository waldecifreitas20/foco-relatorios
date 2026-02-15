import { useState, type PropsWithChildren } from "react";

interface AccordeonProps extends PropsWithChildren {
  title: any;
  disabled?: boolean;
}

export function Accordeon({ title, children, disabled = false }: AccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="rounded-lg overflow-auto border-x border-t overflow-hidden">
      <p
        className={`
          block border-b size-full p-4 
          bg-slate-50 text-slate-700 
          ${disabled ? "opacity-20" : ""} 
          text-lg font-semibold`}
        onClick={() => setIsOpen(old => !old)}>{title}</p>
      {isOpen && children}
    </section>
  );
}

