kt(import.meta.filename, () => {
  const arrays = [];

  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN / 10; i++) {
    const a = new Set();
    a.add('sdffd');
    a.add('sdsdffcd');
    a.add('sdfaaaf3d');
    a.add('sdfdfd2');
    a.add('2fd发2');
    a.add('士大夫fd发2');
    arrays.push(a);
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `6个值的Set：${LEN / 10}: ${memoryUsed / MB} MB`;
});
