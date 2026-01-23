import { createContext, useRef, type PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export const RouterContext = createContext({
  goTo: (_path: string) => {},
  back: () => {},
});

export function RouterProvider(props: PropsWithChildren) {
  const history = useRef([] as string[]);
  const navigate = useNavigate();

  function goTo(path: string) {

    history.current.push(path);
    navigate(path);
  }

  function back() {

    if (history.current.length > 0) {
      let path = history.current.pop() as string;
      goTo(path);
    } else {
      goTo("/");
    }
  }

  return <RouterContext.Provider value={{ goTo, back }}>{props.children}</RouterContext.Provider>;
}
