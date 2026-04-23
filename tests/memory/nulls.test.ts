kt(import.meta.filename, () => {
  const nullValues = [];

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;

  // 创建10万个空数组
  for (let i = 0; i < LEN; i++) {
    nullValues.push(null);
  }

  // 记录内存使用情况
  const afterMemory = process.memoryUsage().heapUsed;

  // 计算内存差异
  const memoryUsed = afterMemory - beforeMemory;

  return `全放null数组长度：${LEN}: ${memoryUsed / MB} MB`;
});
