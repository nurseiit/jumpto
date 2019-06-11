const commander = require('commander');
const program = new commander.Command();

program
  .option('-a, --add [type]', 'Add a directory.');

program.parse(process.argv);

if (program.add === true) console.log('No argument passed.');
else if (program.add !== undefined) console.log(`Add directory "${program.add}".`);

