import type { PropsWithChildren } from "react";

interface FallbackProps extends PropsWithChildren{
  display: boolean;
  fallback: React.ReactNode;
}

export function Fallback(props: FallbackProps) {

  if (props.display) {
    return props.children;
  }

  return props.fallback

}