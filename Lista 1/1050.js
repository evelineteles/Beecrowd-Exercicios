var input = require('fs').readFileSync('1050', 'utf8');
var lines = input.split('\n');

var DDD = lines.shift();

if(DDD == 61){
    console.log("Brasilia");
 }else if(DDD == 71){
    console.log("Salvador");
 }else if(DDD == 11){
    console.log("Sao Paulo");
}else if(DDD == 21){
    console.log("Rio de Janeiro");
}else if(DDD == 32){
    console.log("Juiz de Fora");
}else if(DDD == 19){
    console.log("Campinas");
}else if(DDD == 27){
    console.log("Vitoria");
}else if(DDD == 31){
    console.log("Belo Horizonte");
}else{
    console.log("DDD nao cadastrado")
}
