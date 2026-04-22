kt(import.meta.filename, () => {
  const arrays = [];

  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < ITER_COUNT / 10; i++) {
    const a = new Map();
    a.set('sdf', 'fd');
    a.set('sdsdf', 'fcd');
    a.set('sdfaaa', 'f3d');
    a.set('sdfd', 'fd2');
    a.set('2', 'fd发2');
    a.set('士大夫', 'fd发2');
    arrays.push(a);
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `6对键值对的Map：${ITER_COUNT / 10}: ${memoryUsed / MB} MB`;
});
