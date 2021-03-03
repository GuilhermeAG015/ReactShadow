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

var tamanho = pessoas.length

for(let i = 0; i < tamanho; i++){
    if(!pessoas[i].nome){
        pessoas[i].isValid = false
        pessoas[i].id = i + 1 
    }else if(pessoas[i].nome){
        pessoas[i].isValid = true
        pessoas[i].id = i + 1 
    }
}

console.log('Pessoas Validas')

for(let i = 0; i < tamanho; i++){
    if(pessoas[i].isValid === true){
        console.log(pessoas[i])
    }
}

console.log('Pessoas Invalidas')

for(let i = 0; i < tamanho; i++){
    if(pessoas[i].isValid === false){
        console.log(pessoas[i])
    }
}

for(let i = 0; i < tamanho; i++){
    if(pessoas[i].id == 4){
        pessoas[i].nome = 'Guilherme Alexandre'
        pessoas[i].idade = 19
        pessoas[i].cidade = 'Mogi Mirim'
        pessoas[i].estado = 'SP'
    }
}

for(let i = 0; i < tamanho; i++) {
    if(pessoas[i].nome){
        pessoas[i].isValid = true
    } else if(pessoas[i].isValid === true && pessoas[i].idade >= 18){
        pessoas[i].maior18 = true
    } else if(pessoas[i].isValid === true && pessoas[i].idade < 18){
        pessoas[i].maior18 = false
    } else {
        pessoas[i].isValid = false
    }

    console.log(pessoas)
};