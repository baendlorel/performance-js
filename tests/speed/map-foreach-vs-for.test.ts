it('Map.forEach 与 for + [...map] 遍历对比', () => {
  const map = new Map();
  LEN_RATIO = 0.1;
  for (let i = 0; i < LEN; i++) {
    map.set(i, i);
  }

  // 减小循环次数以便测试能在合理时间内完成
  LEN_RATIO = 0.001;
  for (let i = 0; i < LEN; i++) {
    map.forEach((v, k) => {
      // 简单操作以确保遍历不会被完全优化掉
      const x = k + v;
      void x;
    });
  }
  // 先算一遍预热

  const s0 = performance.now();
  for (let i = 0; i < LEN; i++) {
    map.forEach((v, k) => {
      // 简单操作以确保遍历不会被完全优化掉
      const x = k + v;
      void x;
    });
  }
  const s1 = performance.now();

  // 将 map 展开为数组（一次性），然后用索引遍历
  const entries = [...map];
  const s2 = performance.now();
  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < entries.length; j++) {
      const [k, v] = entries[j];
      const x = k + v;
      void x;
    }
  }
  const s3 = performance.now();

  // 通过 forEach 将条目推入数组（一次性），然后遍历该数组
  const s4 = performance.now();
  const arrFromForEach: Array<[number, number]> = [];
  map.forEach((v, k) => {
    arrFromForEach.push([k, v]);
  });
  const s5 = performance.now();

  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < arrFromForEach.length; j++) {
      const [k, v] = arrFromForEach[j];
      const x = k + v;
      void x;
    }
  }
  const s6 = performance.now();

  return [
    `${LEN_STR} times`,
    `Map.forEach: ${s1 - s0}ms`,
    `for + [...map] iterate: ${s3 - s2}ms`,
    `forEach-push: ${s5 - s4}ms`,
    `forEach-push + for let i total: ${s6 - s4}ms`,
  ];
});
