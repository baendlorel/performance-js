it('proxy函数被调用和直接调用', () => {
  LEN_RATIO = 80;
  let a = 0;
  const f0 = () => a++;
  const fp = new Proxy(f0, { apply: (target) => target() });
  const caller = (f: any) => f();

  const s0 = performance.now();
  for (let i = 0; i < LEN; i++) {
    caller(f0);
  }

  const s1 = performance.now();
  for (let i = 0; i < LEN; i++) {
    fp();
  }
  const s2 = performance.now();

  for (let i = 0; i < LEN; i++) {
    f0();
  }
  const s3 = performance.now();

  return [`${LEN_STR} times`, `Proxy call : ${s2 - s1}ms`, `Normal call: ${s1 - s0}ms`, `Direct call: ${s3 - s2}ms`];
});
