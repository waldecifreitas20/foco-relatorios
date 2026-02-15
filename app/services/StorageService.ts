function save(key: string, item: any) {
  localStorage.setItem(key, JSON.stringify(item));
}

function load(key: string) {
  return JSON.parse(localStorage.getItem(key) ?? "");
}

export const storageService = {
  save, load,
}