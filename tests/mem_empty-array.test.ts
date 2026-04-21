import { iterations } from './env.js';
(function () {
  const arrays = [];

  // 记录内存使用情况
  const beforeMemory = process.memoryUsage().heapUsed;

  // 创建10万个空数组
  for (let i = 0; i < iterations; i++) {
    arrays.push([]);
  }

  // 记录内存使用情况
  const afterMemory = process.memoryUsage().heapUsed;

  // 计算内存差异
  const memoryUsed = afterMemory - beforeMemory;

  console.log(`iterations ${iterations} `);
  console.log(`内存使用变化: ${memoryUsed / 1024 / 1024} MB`);
})();
