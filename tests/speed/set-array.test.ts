it('Set 与数组操作性能对比', () => {
  const set = new Set();
  const array = [];

  LEN_RATIO = 0.01;

  for (let i = 0; i < 12; i++) {
    // 预先准备好一些数据，防止后面没处删
    array.push(i);
    set.add(-i);
  }

  let i = 0;
  setInterval(() => {
    console.log(i / LEN);
  }, 1000);
  const s0 = performance.now();
  for (i = 0; i < LEN; i++) {
    set.add(i); // 测试 add
    set.has(i); // 测试 has
    set.delete(i); // 测试 delete
  }
  const s1 = performance.now();

  for (i = 0; i < LEN; i++) {
    array.push(i); // 测试 push
    array.includes(i); // 测试 includes
    array.splice(i, 1); // 测试 splice
  }
  const s2 = performance.now();

  return [`Set 操作耗时: ${s1 - s0} ms`, `数组操作耗时: ${s2 - s1} ms`];
});
