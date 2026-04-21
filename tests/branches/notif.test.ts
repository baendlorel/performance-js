kt(import.meta.filename, () => {
  let a = Array.from({ length: ITER_COUNT }, () => Math.random() > 0.99);
  let falseCount = 0;
  let trueCount = 0;

  // 第一种写法
  const start = performance.now();
  for (let i = 0; i < ITER_COUNT; i++) {
    if (!a[i]) {
      falseCount++;
    } else {
      trueCount++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < ITER_COUNT; i++) {
    if (a[i]) {
      trueCount++;
    } else {
      falseCount++;
    }
  }
  const s2 = performance.now();

  return `写法if !a: ${s1 - start} ms, 写法if a: ${s2 - s1} ms`;
});
