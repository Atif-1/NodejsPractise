const http=require('http');
const server=http.createServer((req,res)=>{
	console.log('successfull listen');
	
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
	res.write('<head><title>My First Server</title></head>');
	if(req.url=='/home'){
	res.write('<body><h1>Welcome home</h1></body>');
	}
	else if(req.url=='/about'){
	res.write('<body><h1>Welcome to About Us page</h1></body>');
	}
	else if(req.url=='/node'){
	res.write('<body><h1>Welcome to my Node Js project</h1></body>');
	}
	else{
	res.write('<body><h1>please enter url</h1></body>');
	}
	
	res.write('</html>');
	res.end();
});
server.listen('4000');