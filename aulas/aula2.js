// Váriavel http que irá requisitar o módulo http instalado por default com o node
var http = require('http');

var server = http.createServer(function(request, response){
	
	response.writeHead(200, {"Content-Type": "text/html"});
	//Verifica o que está sendo requisitado no browser e retorna a página solicitada, caso não exista uma página que foi solicitada
	//Retorna que a Página não foi solicitada
	if (request.url == "/") {
		response.write("<h1>Pagina Principal</h1>");
	}else if (request.url == "/contato") {
		response.write("<h1>Pagina de Contatos</h1>");
	}else if (request.url == "/clientes") {
		response.write("<h1>Pagina de Clientes</h1>");
	}else{
		response.write("<h1>Pagina nao encontrada</h1>");
	};
	response.end();		
});
server.listen(3000,function(){
	console.log("Aula 2 - Servidor está rodando corretamente!")
});
