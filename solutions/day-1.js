const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./assets/day-1-c-1-input.txt', 'utf8');

  return input
    .split('\n')
    .map((line) => {
      const numbers = line.match(/\d/g);
      return numbers?.length ? numbers.at(0) + numbers.at(-1) : 0;
    })
    .map(Number)
    .reduce((prev, curr) => prev + curr);
}

function part2() {
  return 'aawdawd';
}

module.exports = { part1, part2 };
