kt(import.meta.filename, () => {
  const arrays = [];
  arrays.length = ITER_COUNT;

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < ITER_COUNT; i++) {
    arrays[i] = [];
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `${ITER_COUNT}个数组放在长度为${ITER_COUNT}的大数组中: ${memoryUsed / MB} MB`;
});
