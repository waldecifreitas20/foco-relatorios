import { type PropsWithChildren } from "react";


interface ViewContainerProps extends PropsWithChildren {
  title: string;
}

export function ViewContainer(props: ViewContainerProps) {
  return (
    <div className="w-[90%] mx-auto text-slate-700 font-medium">
      <h2 className="text-4xl my-10 font-medium">{props.title}</h2>
      {props.children}
    </div>
  );
}
