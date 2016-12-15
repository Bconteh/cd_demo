<<<<<<< HEAD
var exec= require('child_process').exec;
var tt = 0;
exec("./nodejs_app/nodeon.sh"; tt=$! );

var t=exec(cmd,function (error,stdout, stderr){
	tt=stdout.replace('\r\n','');
});

exec("./nodejs_app/nodeoff.sh")
if(tt=0)
return 1;
else return 0;
=======

var t = 0;
const exec = require('child_process').exec;
exec('', function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error}');
	t =1;
    return 1;
  }
 else{
	 
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');
  return 0;
 }
});

exec('', function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error} ');
	  console.log('$?');
	t =1;
	  return 0;
		      
    
  }
 else{
	 
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');
	
  return 1;
 }
});
>>>>>>> f30bb4819a03d1cc002f84fd1b7ace4bc32b1250
