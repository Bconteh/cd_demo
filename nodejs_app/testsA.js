var exec= require('child_process').exec;
var tt;
var cmd ='node nodejs_app/app.js' ;

var t=exec(cmd,function (error,stdout, stderr){
	tt=stdout.replace('\r\n','');
	 console.log('stdout: ' + stdout);
      	 console.log('stderr: ' + stderr);
	if(error !== null){
		console.log('Error: '+error);
		tt = 1;
	}
	else{
		tt = 0;
		console.log('Succeeded: Thanks');
	}
});

exec("killall node");
console.log(tt);
if(tt=0)
return 0;
else return 1;

