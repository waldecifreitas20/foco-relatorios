function save(key: string, item: any) {
  localStorage.setItem(key, JSON.stringify(item));
}

function load(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } catch (error) {
    return;
  }
}

export const storageService = {
  save, load,
}