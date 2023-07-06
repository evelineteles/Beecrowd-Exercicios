var input = require('fs').readFileSync('1181', 'utf8');
var lines = input.split('\n')

/VARIÁVEL QUE INDICA A LINHA DA MATRIZ
        var L = parseInt(prompt("Indique a linha que será considerada pra a operação:"));
        //var L = parseInt(lines.shift());

        //CRIAR MATRIZ
        var M = [];             
        
        //CRIAR INDICADOR DE OPERAÇÃO
        var T = prompt("Soma(S) ou Média(M):");
        //var T = lines.shift();

        //PREENCHER A MATRIZ [i]=LINHAS [j]=COLUNAS
        for(var i=0; i<12; i++){

            M[i] = [];
            for(var j=0; j<12; j++){

                var VALOR = parseFloat(prompt("Digite o elemento M["+i+"]["+j+"]"));
                //var VALOR = lines.shift();
                M[i][j] = VALOR;      

            }
        }
        console.table(M)

       //DECLARAR VARIÁVEL ZERADA
       var RESULTADO = 0;
       
       if(T == "S"){
            for(var X=0; X<12; X++){

                RESULTADO = RESULTADO + M[L][X];                
                
            }
        
        }else{

            for(var X=0; X<12; X++){

                RESULTADO = (RESULTADO + M[L][X])/(X+1);                

            }

        }

        document.write(RESULTADO);
        console.log(RESULTADO);