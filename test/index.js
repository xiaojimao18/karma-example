const Util = require('../src/index')

describe('index.js: ', () => {
  it('isNum() should work fine.', () => {
    expect(Util.isNum(1)).toBe(true)
    expect(Util.isNum('1')).toBe(false)
  })
})