let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

var produtos = [produtoA, produtoB, produtoC]
var novovalor

//For para percorrer os produtos
for (var i = 0; i < produtos.length; i++){   
    
    //Condição para calcular valores com imposto dos produtos
    if(produtos[i].internacional){
        novovalor = produtos[i].valor*1.2
        produtos[i].valor= novovalor
        console.log(""+ produtos[i].nome+" é internacional e seu valor com final é " +produtos[i].valor)
    } 
    else {
        novovalor = produtos[i].valor*1.12
        produtos[i].valor= novovalor
        console.log(""+ produtos[i].nome +" é nacional e seu valor com final é " +produtos[i].valor)
    }
}