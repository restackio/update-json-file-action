import {expect, test} from '@jest/globals'

import updateJson from '../src/update-json'

test('updates fields provided on object', async () => {
  const obj = {a: 1, b: 2, c: {d: 3, e: [4, 5, 6]}};
  const fields = {'c.d': 10, 'c.e[0]': 10};
  const expectedObj = {a: 1, b: 2, c: {d: 10, e: [10, 5, 6]}};
  await expect(updateJson(obj, fields)).toEqual(expectedObj);
});
