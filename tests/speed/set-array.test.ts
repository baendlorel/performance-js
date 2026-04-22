kt(import.meta.filename, () => {
  const set = new Set();
  const array = [];

  for (let i = 0; i < ITER_COUNT; i++) {
    array.push(i); // 预先准备好一些数据，防止后面没处删
  }

  const s0 = performance.now();
  for (let i = 0; i < ITER_COUNT; i++) {
    set.add(i); // 测试 add
    set.has(i); // 测试 has
    set.delete(i); // 测试 delete
  }
  const s1 = performance.now();

  for (let i = 0; i < ITER_COUNT; i++) {
    array.push(i); // 测试 push
    array.includes(i); // 测试 includes
    array.splice(i, 1); // 测试 splice
  }
  const s2 = performance.now();

  return [`Set 操作耗时: ${s1 - s0} ms`, `数组操作耗时: ${s2 - s1} ms`];
});
