import type { PropsWithChildren } from "react";

export default function SectionTitle(props: PropsWithChildren) {
  return <p className="text-slate-600 font-semibold my-4">{props.children}</p>;
}