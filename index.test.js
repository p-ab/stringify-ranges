const stringifyRanges = require('./index');
const assert = require('assert').strict;

describe('Stringify grouped ranges', function() {
  const data = [
    {array: [1,2,3,4,5,6,7,8], string: '1-8'},
    {array: [1,3,4,5,6,7,8,10,11,12], string:'1,3-8,10-12'},
    {array: [1,2,3], string: '1-3'},
    {array: [1,2], string: '1,2'},
    {array: [1,2,4], string: '1,2,4'},
    {array: [1,2,4,5,6], string: '1,2,4-6'},
    {array: [1,2,3,7,8,9,15,17,19,20,21], string: '1-3,7-9,15,17,19-21'},
    {array: [1,2,3,4,5,6,100,1091,1999,2000,2001,2002], string: '1-6,100,1091,1999-2002'},
    {array: [1], string: '1'},
    {array: [1,3,5,7,9,11], string: '1,3,5,7,9,11'}
  ];
  for (const sample of data) {
    it(`convert ${sample.array}, should be ${sample.string}`, async function() {
      const result = await stringifyRanges(sample.array);
      assert.strictEqual(result, sample.string);
    });
  }
});