import { type PropsWithChildren } from "react";


interface ViewContainerProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

export function ViewContainer(props: ViewContainerProps) {
  return (
    <div className="w-[90%] mx-auto text-slate-700 font-medium">
      <div className="my-10">
        <h2 className="text-4xl font-medium mb-1">{props.title}</h2>
        <p className="text-black/50 font-normal text-xs">{props.subtitle}</p>
      </div>
      {props.children}
    </div>
  );
}
