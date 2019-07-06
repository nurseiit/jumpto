# jumpto

🏀 One line setup utility to bookmark and jump through local directories.

## Installation

```
$ yarn global add jumpto
$ jumpto init >> ~/.[SHELL]  # replace [SHELL] with your shell's config filename. i.e 'zshrc', 'bashrc'
```

## Usage

```
$ jumpto --help

Usage: jumpto [alias] or [command] [options]

Utility to bookmark and jump through local directories.

Options:
  -V, --version              output the version number
  -l, --list                 List all aliases
  -h, --help                 output usage information

Commands:
  init                       initialize the utility
  add|a [directory] [alias]  add a directory to map an alias
  remove|r [alias]           remove an existing alias to directory

Examples:
  $ jumpto add ../bin myBin
  $ jumpto myBin
  $ jumpto remove myBin

```

## Local Development

```
$ git clone git@github.com:nurseiit/jumpto.git && cd jumpto
$ yarn install
```

## License

jumpto uses the MIT license.
