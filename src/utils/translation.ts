type TranslateFn = (key: string) => string;

type TranslateOptions<T> = {
  keys: (keyof T)[];
  arrayKeys?: (keyof T)[];
  filterEmpty?: boolean;
};

export function translateItems<T>(
  items: T[],
  i18n: TranslateFn,
  options: TranslateOptions<T>
): T[] {
  const { keys, arrayKeys = [], filterEmpty = true } = options;

  return items.map((item) => {
    const result = { ...item };

    for (const key of keys) {
      const value = item[key];
      if (typeof value === 'string') {
        const translated = i18n(value);
        if (filterEmpty) {
          if (isNonEmptyString(translated)) {
            result[key] = translated as T[typeof key];
          } else {
            delete result[key];
          }
        } else {
          result[key] = translated as T[typeof key];
        }
      }
    }

    for (const key of arrayKeys) {
      const value = item[key];
      if (Array.isArray(value)) {
        const translated = value
          .map((v) => (typeof v === 'string' ? i18n(v) : v))
          .filter((v) => !filterEmpty || isNonEmptyString(v));

        if (translated.length > 0) {
          result[key] = translated as T[typeof key];
        } else if (filterEmpty) {
          delete result[key];
        }
      }
    }

    return result;
  });
}

function isNonEmptyString(value?: string) {
    return typeof value === "string" && value.trim().length > 0
}