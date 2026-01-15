import { type PropsWithChildren, type ReactElement } from "react";

interface ViewContainerProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  trailing?: ReactElement;  
}

export function ViewContainer(props: ViewContainerProps) {
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto text-slate-700 font-medium">
      <div className="my-10 flex items-center">
          <div>
          <h2 className="text-4xl font-medium mb-1">{props.title}</h2>
          <p className="text-black/50 font-normal text-xs">{props.subtitle}</p>
          </div>

          {props.trailing}

      </div>
      {props.children}
    </div>
  );
}
