export function useClient(fn: (args?: any) => void) {
  if(typeof window !== "undefined") {
    return fn();
  }
}