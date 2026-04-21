describe(() => {
  const arrays = [];

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;
  arrays.length = ITER_COUNT;

  // 记录内存使用情况
  const afterMemory = process.memoryUsage().heapUsed;

  // 计算内存差异
  const memoryUsed = afterMemory - beforeMemory;

  log(import.meta.filename, `空槽数组长度：${ITER_COUNT}: ${memoryUsed / MB} MB`);
});
