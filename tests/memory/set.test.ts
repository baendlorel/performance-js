it('6个值的Set内存占用', () => {
  LEN_RATIO = 0.1;
  const sets = [];
  const m0 = process.memoryUsage().heapUsed;

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

  const m1 = process.memoryUsage().heapUsed;
  const memoryUsed = m1 - m0;

  return `6个值的Set：${LEN}: ${memoryUsed / MB} MB`;
});
