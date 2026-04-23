kt(import.meta.filename, () => {
  LEN_RATIO = 0.1;
  const maps = [];

  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN; i++) {
    const valueMap = new Map();
    valueMap.set('sdf', 'fd');
    valueMap.set('sdsdf', 'fcd');
    valueMap.set('sdfaaa', 'f3d');
    valueMap.set('sdfd', 'fd2');
    valueMap.set('2', 'fd发2');
    valueMap.set('士大夫', 'fd发2');
    maps.push(valueMap);
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `6对键值对的Map：${LEN}: ${memoryUsed / MB} MB`;
});
