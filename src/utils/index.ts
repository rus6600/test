export const getKeys = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;

export const regEx = /(strMeasure)+|[0-9]+/g;
