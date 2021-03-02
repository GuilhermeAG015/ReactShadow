// == Igualdade
// ! Negação
// != Não Igual
// > Maior que
// >= Maior ou igual
// < Menor que
// <= Menor ou igual
var pessoa1 = {
    nome: 'Guilherme',
    idade: 19,
    maior18: '',
    cidade: 'Mogi Mirim',
    estado: 'SP',
    isValid: ''
}

var pessoa2 = {
    nome: '',
    idade: 17,
    maior18: '',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    isValid: ''
}

var pessoa3 = {
    nome: '',
    idade: '',
    maior18: '',
    cidade: '',
    estado: '',
    isValid: ''
}
console.log('pessoa1')
    console.log(pessoa1)

console.log('pessoa2')
    console.log(pessoa2)

console.log('pessoa3')
    console.log(pessoa3)

if(pessoa1.nome){
    console.log('pessoa1 é valida')
    pessoa1.isValid = true
    if(pessoa1.idade > 18) {
        pessoa1.maior18 = true
    }else if(pessoa1 < 18){
        pessoa1.maior18 = true
    }else{
        pessoa1.maior18 = true
    }
    console.log(pessoa1)
}else if(!pessoa1.nome){
    pessoa1.isValid = false
    console.log(pessoa1)        
}

if(pessoa2.nome){
    console.log('pessoa2 é valida')
    pessoa2.isValid = true
    if(pessoa2.idade > 18) {
        pessoa2.maior18 = true
    }else if(pessoa2 < 18){
        pessoa2.maior18 = true
    }else{
        pessoa2.maior18 = true
    }
    console.log(pessoa2)
}else if(!pessoa2.nome){
    pessoa2.isValid = false
    console.log('pessoa2 invalida')
    console.log(pessoa2)        
}

if(!pessoa3.nome){
    pessoa3.isValid = false
    console.log('Pessoa3 invalida')
    console.log(pessoa3)
}



