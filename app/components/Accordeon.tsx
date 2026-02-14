import { useState, type PropsWithChildren } from "react";

interface AccordeonProps extends PropsWithChildren {
  title: any;
}

export function Accordeon({ title, children }: AccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white rounded-lg overflow-auto border border-slate-200">
      <p className="block size-full p-4 bg-slate-50 text-lg font-semibold" onClick={() => setIsOpen(old => !old)}>{title}</p>
      {isOpen && children}
    </section>
  );
}

