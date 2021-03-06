const fs = require('fs');
const path = require('path');

//写日志
function writeLog(writeStream, log) {
    writeStream.write(log + '\n'); //关键代码
}

//生成 write Stream
function createWriteStream(filename) {
    const fullFileName = path.join(__dirname, '../', '../', 'logs', filename);
    const writeStream = fs.createWriteStream(fullFileName, {
        //'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
        flags: 'a'
    });
    return writeStream;
}

//写访问日志
const accessWriteStream = createWriteStream('access.log');
function access(log) {
    writeLog(accessWriteStream, log);
}

module.exports = {
    access
}