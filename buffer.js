buf = new Buffer(256);
len = buf.write('你好');

console.log("input bytes"+len);

buf = new Buffer(26);
for(let i = 0;i<26;i++){
	buf[i] = i+97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('utf8',0,8));
console.log(buf.toString('',0,8));

// 将buffer转换为json对象

var buf = new Buffer('你好');
var buf2 = new Buffer('世界');
var json = buf.toJSON(buf);

var con =Buffer.concat([buf,buf2]);
var compare = buf2.compare(buf);

console.log(con.toString());
console.log(json);
if(compare < 0) {
   console.log(buf2 + " 在 " + buf + "之前");
}else if(result == 0){
   console.log(buf2 + " 与 " + buf + "相同");
}else {
   console.log(buf2 + " 在 " + buf + "之后");
}

var copy1=new Buffer('ABC');
var copy2=new Buffer(3);
copy1.copy(copy2);
console.log(copy2.toString());