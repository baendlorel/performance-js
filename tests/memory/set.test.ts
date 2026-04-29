describe(import.meta.filename, () => {
  LEN_RATIO = 0.1;
  const sets = [];
  const beforeMemory = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN; i++) {
    const valueSet = new Set();
    valueSet.add('sdffd');
    valueSet.add('sdsdffcd');
    valueSet.add('sdfaaaf3d');
    valueSet.add('sdfdfd2');
    valueSet.add('2fd发2');
    valueSet.add('士大夫fd发2');
    sets.push(valueSet);
  }

  const afterMemory = process.memoryUsage().heapUsed;

  const memoryUsed = afterMemory - beforeMemory;

  return `6个值的Set：${LEN}: ${memoryUsed / MB} MB`;
});
