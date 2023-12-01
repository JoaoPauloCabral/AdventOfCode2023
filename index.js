const fs = require('fs');

(() => {
  const fileList = fs.readdirSync('./solutions');

  fileList.forEach((fileName, i) => {
    console.log(
      '\n\n',
      `=======================  Day ${i + 1}  =======================`,
      '\n'
    );

    const functions = require(`./solutions/${fileName}`);

    Object.values(functions).forEach((fn, index) => {
      if (typeof fn === 'function') console.log(`Part ${index + 1}: ${fn()}`);
    });
  });
})();
