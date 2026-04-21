kt(import.meta.dirname, () => {
  let a: any = { a: 1, b: 2, c: 3 }; // 初始对象
  let b: any = { d: 4, e: 5, f: 6 }; // 被拷贝的对象

  const innerITER_COUNT = ITER_COUNT * 10;

  // 第一种写法：Object.assign
  const s0 = performance.now();
  for (let i = 0; i < innerITER_COUNT; i++) {
    Object.assign(a, b);
  }

  // 第二种写法：for...in 循环
  const s1 = performance.now();
  for (let i = 0; i < innerITER_COUNT; i++) {
    for (let k in b) {
      a[k] = b[k];
    }
  }
  const s2 = performance.now();

  return `Object.assign: ${s1 - s0}ms, for...in: ${s2 - s1}ms`;
});
