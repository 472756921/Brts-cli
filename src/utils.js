const path = require("path");

// URL校准根目录
function getRootPath() {
	return path.resolve(__dirname, "./../");
}

// 获取 package.json 文件
function getPackageFile() {
	return require(path.join(getRootPath(), "package.json"));
}

// 获取 package.json version
function getPackageVersion() {
	return getPackageFile().version;
}

function logPackageVersion() {
	return `zero-cli version: ${getPackageVersion()}`;
}
