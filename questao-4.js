const distribuidora = [
    [ 67.836,43],
    [ 36.678,66],
    [ 29.229,88],
    [ 27.165,48],
    [ 19.849,53]
]
var total = 0
for(var i=0;i<distribuidora.length;i++){
    
    total += parseFloat(distribuidora[i]) 
}
sp =  parseFloat(distribuidora[0])
rj = parseFloat(distribuidora[1])
mg =  parseFloat(distribuidora[2])
es =  parseFloat(distribuidora[3])
outros = parseFloat(distribuidora[4])


sp = (sp/total)*100
rj = (rj/total)*100
mg = (mg/total)*100
es = (es/total)*100
outros = (outros/total)*100



console.log(total)
console.log("SP "+sp.toFixed(3)+"%")
console.log("RJ "+rj.toFixed(3)+"%")
console.log("MG "+mg.toFixed(3)+"%")
console.log("ES "+es.toFixed(3)+"%")
console.log("Outros "+outros.toFixed(3)+"%")
