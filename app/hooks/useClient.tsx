import { useEffect, useState } from "react";

export function useClient<T>(fn: () => T) {
  const [fnReturn, setFnReturn] = useState<T | undefined>();

  useEffect(() => {
    setFnReturn(fn());
  }, []);

  return fnReturn;
}