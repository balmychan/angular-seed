const path = require('path');
const spawn = require('cross-spawn');
const cwd = process.cwd();

/**
 * Return paths prepended with web root
 */
exports.webRoot = function (v) {
	v = v || '';
	return path.resolve(cwd, v);
}

/**
 * No-op function
 */
exports.noop = function () { }

/**
 * Execute given command in child process
 * @param {string} command - CLI command
 * @example
 * execCommand('npm list --depth 0')
 */
exports.execCommand = (command) => {
	console.log('[execCommand]', command);
	var commandArr = command.split(' ');
	// spawn.sync format is like.., `spawn.sync('npm', ['list', -g', '--depth', '0'])`
	spawn.sync(commandArr.shift(), commandArr, { stdio: 'inherit' });
}