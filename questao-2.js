
function fibonacci(a){   

var fibo = [0,1]



for(var i=2;i<=a;i++){

   fibo[i] = fibo[i-2]+fibo[i-1]
   if(fibo[i]==a){
     console.log("possui o valor "+a+" na Fibonacci")
     break
   } 
   if(fibo[i]>a){
     
     console.log("Não possui o valor "+a+" na Fibonacci")
     break
     
   }
   
     
}


}

fibonacci(55)