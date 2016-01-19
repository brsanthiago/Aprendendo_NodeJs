var arquivo = require('fs');
var localEscrita = './clubes/2ª-divisao.txt';
var localLeitura = './clubes/clubes.txt';

//Ler arquivo
arquivo.readFile(localLeitura,function(err,data){
	if(err) throw err;
	console.log(data.toString());
});

//Verifica se existe arquivo
arquivo.exists(localEscrita,function(resultado){
	if(!resultado){
		//Escrevendo em arquivo
		arquivo.writeFile(localEscrita,'Vasco', function(err){
			if(err) throw err;
			console.log('Escreve Times na Segunda Divisão!');
		});		
	}else{
		console.log('Arquivo já existe');
	}
});
