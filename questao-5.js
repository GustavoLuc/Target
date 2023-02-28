
function converter(string){
    
    var convertido = [] 
    for(var i=string.length-1;i>=0;i--){
      
     convertido.push(string[i])
            
    }
    var final = convertido.join('')

return final
}

console.log(converter("gustavo"))