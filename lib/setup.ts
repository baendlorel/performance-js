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
