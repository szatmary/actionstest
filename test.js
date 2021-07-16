const fs = require('fs');
const applicationOutput = fs.readFileSync('/dev/stdin').toString();

const expectedOutput = `Hello World
`;

if (applicationOutput === expectedOutput) {
  console.log("SUCCESS");
  process.exit();
}
console.log("FAIL");
process.exit(1)

