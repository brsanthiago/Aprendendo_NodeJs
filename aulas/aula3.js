var arquivo = require('fs');
arquivo.readFile('./clubes/clubes.txt',function(err,data){
	if(err) throw err;
	console.log(data.toString());
});

arquivo.writeFile('./clubes/2divisao.txt','Vasco', function(err){
	if(err) throw err;
	console.log('Escreve Times na Segunda Divisão!');
})
