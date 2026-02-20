export function useClient(fn: (args?: any) => any) {
  if(typeof window !== "undefined") {
    return fn();
  }
}