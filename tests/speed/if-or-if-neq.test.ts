it('if (a[i]) 和 if (a[i] !== null) 速度对比', () => {
  LEN_RATIO = 12;
  const a = Array.from({ length: LEN }, () => (Math.random() > 0.85 ? { sdf: 23 } : null));
  let b = 0;

  // 第一种写法
  const s0 = performance.now();
  for (let i = 0; i < LEN; i++) {
    if (a[i]) {
      b++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < LEN; i++) {
    if (a[i] !== null) {
      b++;
    }
  }
  const s2 = performance.now();

  return [`if (a[i]) ${s1 - s0} ms`, `if (a[i] !== null) ${s2 - s1} ms`];
});
