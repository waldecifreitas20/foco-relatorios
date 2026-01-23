import type { PropsWithChildren } from "react";

interface FallbackProps extends PropsWithChildren{
  display: boolean;
}

export function Fallback(props: FallbackProps) {

  if (props.display) {
    return props.children;
  }

  return (
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
  );

}