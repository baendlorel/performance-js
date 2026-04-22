kt(import.meta.filename, () => {
  const innerITER_COUNT = ITER_COUNT * 20;

  let a = 0;
  let b = Array.from({ length: innerITER_COUNT }, () => (Math.random() > 0.5 ? { nodeType: 0 } : null));

  // 第一种写法
  const start = performance.now();
  for (let i = 0; i < innerITER_COUNT; i++) {
    if ((b[0]?.nodeType as any) > 0) {
      a++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < innerITER_COUNT; i++) {
    if (typeof b[0]?.nodeType === 'number') {
      a++;
    }
  }
  const s2 = performance.now();

  return [`写法?.nodeType > 0: ${s1 - start} ms`, `写法typeof ?.nodeType === 'number': ${s2 - s1} ms`];
});
