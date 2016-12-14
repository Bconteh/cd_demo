var exec= require('child_process').exec;
var tt;
var cmd ='node nodejs_app/app.js' ;

var t=exec(cmd,function (error,stdout, stderr){
	 console.log('stdout: ' + stdout);
      	 console.log('stderr: ' + stderr);
	if(error != null){
		tt = 1;
		console.log('Error: '+error);
		return 1;
	}
	else{
		tt = 0;
		console.log('Succeeded: Thanks');
		return 0;
	}
});

exec("killall node");
console.log(tt);
return tt;

