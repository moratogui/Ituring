//let numero = prompt("Entre com o valor que deseja verificar")
let numero = 10
let divisores =0, cont

for(cont = 1; cont <= numero; cont ++){
    if(numero % cont ==0){
        divisores ++
    }
}

if(divisores == 2){
    console.log("" + numero + " é primo")
}
else{
    console.log("" + numero + " não é primo")
}