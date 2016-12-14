var exec= require('child_process').exec;
var tt;
var cmd ='./nodejs_app/nodeon.sh & tt=$!' ;

var t=exec(cmd,function (error,stdout, stderr,callback){
	tt=stdout.replace('\r\n','');
	callback(tt);
});

exec("./nodejs_app/nodeoff.sh");
console.log(tt);
if(tt=0)
return 1;
else return 0;

