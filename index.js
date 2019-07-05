const commander = require('commander');
const program = new commander.Command();

const { init, readAliases, addDirectory, listAliases, removeAlias } = require('./methods');

program
  .version('1.0.1')
  .description('Utility to bookmark and jump through local directories.')
  .usage('[alias] or [command] [options]');

program
  .command('init')
  .description('initialize the utility')
  .action(init);


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

if (process.argv.length < 3){
  let argv = process.argv;
  argv.push('--help');
  program.parse(argv);
} else {
  program.parse(process.argv);
}

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
// Need to jump to `all[alias]` – bash wrapper will take care of that.
console.log(all[alias]);
process.exit(1);
