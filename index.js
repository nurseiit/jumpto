const commander = require('commander');
const program = new commander.Command();

const { readAliases, addDirectory, listAliases, removeAlias } = require('./methods');

program
  .version('1.0.1')
  .description('Utility to bookmark and jump through local directories.')
  .usage('[alias] or [command] [options]');

program
  .command('add [directory] [alias]')
  .alias('a')
  .description('add a directory to map an alias')
  .action(addDirectory);

program
  .command('remove [alias]')
  .alias('r')
  .description('remove an existing alias to directory')
  .action(removeAlias);

program
  .option('-l, --list', 'List all aliases');

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ jumpto add ../bin myBin');
  console.log('  $ jumpto myBin');
  console.log('  $ jumpto remove myBin');
});

program.parse(process.argv);

if (program.list !== undefined) {
  listAliases();
  process.exit(0);
}

const len = process.argv.length
const alias = process.argv[len - 1];

const all = readAliases();

if (all[alias] === undefined) {
  console.log(`Cannot find alias for "${alias}"!`);
  process.exit(0);
}

console.log(all[alias]);
process.exit(1);
