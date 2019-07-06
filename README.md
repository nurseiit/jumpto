# jumpto

[![npm version](http://img.shields.io/npm/v/jumpto.svg?style=flat)](https://npmjs.org/package/jumpto "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


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

## Support

__Bugs and requests__: submit them through the project's issues tracker.<br>
[![Issues](http://img.shields.io/github/issues/nurseiit/jumpto.svg)]( https://github.com/nurseiit/jumpto/issues )

## Acknowledgements

**jumpto** © 2019+, Nurseiit. Released under the [MIT] License.<br>
Authored and maintained by Nurseiit with help from contributors ([list][contributors]).

> [devnur.me](https://devnur.me) &nbsp;&middot;&nbsp;
> GitHub [@nurseiit](https://github.com/nurseiit) &nbsp;&middot;&nbsp;
> Twitter [@anurseiit](https://twitter.com/anurseiit)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/nurseiit/jumpto/contributors
