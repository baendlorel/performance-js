describe(import.meta.filename, () => {
  LEN_RATIO = 50;
  let obj = { a: 'value', b: 42, c: 'another value' }; // 测试对象
  let key = 'a'; // 测试的键

  const start = performance.now();
  let b = 1;
  for (let i = 0; i < LEN; i++) {
    if (key in obj) {
      b++;
    }
  }
  const s1 = performance.now();

  for (let i = 0; i < LEN; i++) {
    if (typeof (obj as any)[key] === 'string') {
      b--;
    }
  }
  const s2 = performance.now();

  return [`写法key in obj: ${s1 - start} ms`, `写法typeof  === 'string': ${s2 - s1} ms`];
});
