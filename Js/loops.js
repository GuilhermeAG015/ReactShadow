var pessoas = [
    {
        nome: 'Guilherme',
        idade: 19,
        maior18: '',
        cidade: 'Mogi Mirim',
        estado: 'SP',
        isValid: '',
        id: ''
    },
    {
        nome: '',
        idade: '',
        maior18: '',
        cidade: '',
        estado: '',
        isValid: '',
        id: ''
    },
    {
        nome: 'Alexandre',
        idade: 17,
        maior18: '',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        isValid: '',
        id: ''
    },
    {
        nome: '',
        idade: '',
        maior18: '',
        cidade: '',
        estado: '',
        isValid: '',
        id: ''
    }
];


for(let i = 0; i < pessoas.length; i++){
    if(!pessoas[i].nome){
        pessoas[i].isValid = false
        pessoas[i].id = i + 1 
    }else if(pessoas[i].nome){
        pessoas[i].isValid = true
        pessoas[i].id = i + 1 
    }
}

console.log('Pessoas Validas')

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].isValid === true){
        console.log(pessoas[i])
    }
}

console.log('Pessoas Invalidas')

let i = 0

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].isValid === false){
        console.log(pessoas[i])
    }
}