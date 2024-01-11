const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
	const url=req.url;
	const method=req.method;
	const message=fs.readFileSync('message.txt',(err)=>console.log("cannot read file data"+err));;
	if(url==='/'){
	res.write('<html>');
	res.write('<head><title>My First Server</title></head>');
	res.write(`<body><p>${message}</p><form action="/message" method ="POST"><input type="text" name="message"><input type="submit"></form></body>`)
	res.write('</html>');
	return res.end();
	}
	if(url=='/message' && method=='POST'){
		const body=[];
		req.on('data',(chunks)=>{
			body.push(chunks);
		})
		req.on('end',()=>{
			const parsedBody=Buffer.concat(body).toString();
			const msg=parsedBody.split('=')[1];
			fs.writeFileSync('message.txt',msg);
		})
		res.statusCode=302;
		res.setHeader('Location','/');//to  set back the page url to slash
		return res.end();
	}
});
server.listen('4000');