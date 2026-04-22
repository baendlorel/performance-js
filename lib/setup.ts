Reflect.set(globalThis, 'ITER_COUNT_BASE', 1e6);
Reflect.set(globalThis, 'ITER_RATIO', 1);
Reflect.set(globalThis, 'MB', 1024 * 1024);
Object.defineProperty(globalThis, 'ITER_COUNT', {
  get() {
    return ITER_COUNT_BASE * ITER_RATIO;
  },
  configurable: true,
  enumerable: true,
});
