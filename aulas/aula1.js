// Váriavel http que irá requisitar o módulo http instalado por default com o node
var http = require('http');

//Váriavel server que irá utilizar o http para criar um novo servidor, que ficará requisitando e respondendo 
var server = http.createServer(function(request, response){
	//O responde será responsável pela resposta que será escrita no modo text/html
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.write("<br>");
	response.write("Primeira aula de Node.js");
	
	response.end();		
});
//Solicita que o servidor inicie na porta 3000 e imprima no console a mensgem "Servidor está rodando corretamente!")
server.listen(3000,function(){
	console.log("Servidor está rodando corretamente!")
});
