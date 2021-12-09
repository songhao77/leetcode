const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '不同路径';
const tepmlate = ({ input, output }) => {
  return `输入: obstacleGrid = ${slice64(input)}
      输出: ${output}`;
};

const samples = [
  {
    input: [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
    output: 2,
  },
  {
    input: [ [ 0, 1 ], [ 0, 0 ] ],
    output: 1,
  },
  {
    input: [ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ] ],
    output: 7,
  },
  {
    input: [ [ 1, 0 ], [ 0, 0 ] ],
    output: 0,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      // 测试
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
