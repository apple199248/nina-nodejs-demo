console.info('程序开始执行');

var counter = 10;
console.log('技术:%d',counter);

console.time('get data');

console.timeEnd('get data');
console.info('程序执行完毕了');

console.log('当前目录：'+process.cwd());
console.log('当前版本'+process.version);