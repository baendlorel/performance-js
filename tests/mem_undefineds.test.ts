kt(import.meta.filename, () => {
  const arrays = [];

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;

  // 创建10万个空数组
  for (let i = 0; i < ITER_COUNT; i++) {
    arrays.push(undefined);
  }

  // 记录内存使用情况
  const afterMemory = process.memoryUsage().heapUsed;

  // 计算内存差异
  const memoryUsed = afterMemory - beforeMemory;

  return `全放undefined数组长度：${ITER_COUNT}: ${memoryUsed / MB} MB`;
});
