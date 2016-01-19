var http = require('http'),
	arquivo = require('fs');
	var localIndex = './site/index.html';
	
 var server = http.createServer(function(request,response){
	 arquivo.readFile(localIndex,function(err,localIndex){
		 if(err) response.write('Page Not Found');
		 response.write(localIndex);
		response.end();
	 });
		
	});
	
	server.listen(3000,function(){
		console.log('Aplicação Iniciada')
	});
