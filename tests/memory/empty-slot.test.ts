kt(import.meta.filename, () => {
  const arrays = [];

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;
  arrays.length = LEN;

  // 记录内存使用情况
  const afterMemory = process.memoryUsage().heapUsed;

  // 计算内存差异
  const memoryUsed = afterMemory - beforeMemory;

  return `空槽数组长度：${LEN}: ${memoryUsed / MB} MB`;
});
