kt(import.meta.filename, () => {
  const arrays = [];
  arrays.length = LEN;

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN; i++) {
    arrays[i] = [];
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `${LEN}个空数组放在一个大数组中: ${memoryUsed / MB} MB`;
});
