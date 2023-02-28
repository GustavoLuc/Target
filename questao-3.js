const dados = require('./dados.json')


var dias = 0
var total = 0
var mod = dados.map(function(num){
    if(`${num.valor}`!=0){
        dias += 1;
       total += num.valor
    }
    
    return`${num.dia} ${num.valor}`
})



    
var modNum = dados.map(function(num){
    var fatura = []
    fatura = num.valor
    return fatura
})


function menorValor(faturamento) {
    
    var menor = faturamento[0];
    for (var i = 0; i < faturamento.length; i++) {
      if (faturamento[i] < menor && faturamento[i] !=0) {
        menor = faturamento[i];
         var dMenor = i+1
        
      }
    }
    return menor+" Dia: "+dMenor;
  }

  function maiorValor(faturamento) {
    var maior = faturamento[0];
    for (var i = 0; i < faturamento.length; i++) {
      if (faturamento[i] > maior) {
        maior = faturamento[i];
       var dMaior = i+1

        
      }
    }
    return maior+" Dia: "+dMaior;
  }

  


var result = total/dias

var modDia = dados.map(function(num){
    var MaiorMedia = []
    if(num.valor>result){
        MaiorMedia = num.dia
    }
   
   return MaiorMedia
})

  var semVazio = modDia.filter(modDia=>modDia>0)

console.log(mod)
console.log('Dias com Faturamento: '+dias)
console.log('Valor Total: '+total)
console.log('Valor medio: '+result)
console.log('Maior valor: '+maiorValor(modNum))
console.log('Menor valor: '+menorValor(modNum))
console.log('Dias com faturamento maior que a Média: '+modDia.filter(modDia=>modDia>0))

