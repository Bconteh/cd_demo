var exec= require('child_process').exec;
var tt = 0;
var cmd ='./nodejs_app/nodeon.sh & tt=$!' ;

var t=exec(cmd,function (error,stdout, stderr){
	tt=stdout.replace('\r\n','');
});

exec("./nodejs_app/nodeoff.sh");
console.log(tt);
if(tt=0)
return 1;
else return 0;

