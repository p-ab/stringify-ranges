const convertList = (list = []) => {
  const ranges = [];
  list.map((value, index) => {
      if (list[index - 1] !== value - 1) {
        ranges.push({initial: value});
        return value;
      }

      const range = ranges[ranges.length - 1];
      range.final = value;
      return value;
  });

  const result = ranges
    .map(({initial, final}) => {
      if (final === undefined) { return initial; }
      if (final - initial === 1) { return `${initial},${final}`; }
      return `${initial}-${final}`;
    })
    .join(',')

  return Promise.resolve(result);
}

module.exports = convertList;