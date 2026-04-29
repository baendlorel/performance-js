describe(import.meta.filename, () => {
  LEN_RATIO = 20;

  let matchCount = 0;
  const nodeCandidates = Array.from({ length: LEN }, () => (Math.random() > 0.5 ? { nodeType: 0 } : null));

  // 第一种写法
  const s0 = performance.now();
  for (let i = 0; i < LEN; i++) {
    if ((nodeCandidates[0]?.nodeType as any) > 0) {
      matchCount++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < LEN; i++) {
    if (typeof nodeCandidates[0]?.nodeType === 'number') {
      matchCount++;
    }
  }
  const s2 = performance.now();

  return [`写法?.nodeType > 0: ${s1 - s0} ms`, `写法typeof ?.nodeType === 'number': ${s2 - s1} ms`];
});
