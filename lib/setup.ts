Reflect.set(globalThis, 'LEN_BASE', 1e6);
Reflect.set(globalThis, 'LEN_RATIO', 1);
Reflect.set(globalThis, 'MB', 1024 * 1024);
Object.defineProperty(globalThis, 'LEN', {
  get() {
    return LEN_BASE * LEN_RATIO;
  },
  configurable: true,
  enumerable: true,
});
Object.defineProperty(globalThis, 'LEN_STR', {
  get() {
    if (LEN > 1e8) {
      return `${(LEN / 1e8).toFixed(2)}亿`;
    } else if (LEN > 1e4) {
      return `${(LEN / 1e4).toFixed(2)}万`;
    }
    return String(LEN);
  },
  configurable: true,
  enumerable: true,
});

export {};

declare global {
  /**
   * `1e6` by default
   */
  const LEN_BASE: number;

  /**
   * @returns `LEN_BASE * LEN_RATIO`
   */
  const LEN: number;

  const LEN_STR: string;

  /**
   * The final `LEN` will multiply by this value
   */
  let LEN_RATIO: number;

  const MB: number;

  const it: (testCase: string, fn: () => any) => void;
}
