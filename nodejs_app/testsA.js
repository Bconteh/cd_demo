var exec= require('child_process').exec;
var tt;
var cmd ='./nodejs_app/nodeon.sh' ;

var t=exec(cmd,function (error,stdout, stderr){
	tt=stdout.replace('\r\n','');
	if(error !== null){
		console.log('Error: '+error);
		tt = 1;
	}
	else{
		tt = 0;
		console.log('Succeeded: Thanks');
	}
});

exec("./nodejs_app/nodeoff.sh");
console.log(tt);
if(tt=0)
return 0;
else return 1;

