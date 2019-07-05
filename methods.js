const fs = require('fs');
const path = require('path');

const homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
const configFile = homeDir + '/.jumpto';

// Writes [object: all] to 'configFile'
const saveAliases = (all) => {
  const data = JSON.stringify(all);
  fs.writeFileSync(configFile, data); 
};

// Reads and returns [object] the contents of 'configFile'.
// Creates an empty 'configFile' if it does not exist.
const readAliases = () => {
  let all = {};
  try {
    const raw = fs.readFileSync(configFile);
    all = JSON.parse(raw);
  } catch(err) {
    saveAliases({});
  }
  return all;
};

const addDirectory = (directory, alias) => {
  if (alias == undefined) {
    if (directory == undefined)
      process.stdout.write('[directory] and ');
    console.log('[alias] cannot be empty!');
    process.exit(0);
  }
  const absoluteDir = path.resolve(directory);
  console.log(`Mapping "${absoluteDir}" to an alias "${alias}".`);
  
  let all = readAliases();
  all[alias] = absoluteDir;

  saveAliases(all);
  process.exit(0);
};

const listAliases = () => {
  const all = readAliases();
  if (Object.keys(all).length === 0 && all.constructor === Object) {
    console.log('No aliases to list.');
    return;
  }
  console.log('All aliases:');
  Object.keys(all).forEach((key) => {
    console.log(`  ${key} => ${all[key]}`);
  });
  process.exit(0);
};

const removeAlias = (alias) => {
  let all = readAliases();
  if (all[alias] !== undefined) {
    delete all[alias];
    saveAliases(all);
    console.log(`Removed an alias "${alias}".`);
  } else {
    console.log(`Cannot find an alias "${alias}"!`);
  }
  process.exit(0);
};

const init = () => {
  const filePath = path.resolve(__dirname, './bin/_init');
  const raw = fs.readFileSync(filePath, 'utf8');
  console.log(raw);
  process.exit(0);
};

module.exports = { init, readAliases, addDirectory, listAliases, removeAlias };
