let result = document.getElementById('resultado')
let teclado = document.querySelectorAll('.botao')
let expressao = ''
// let dataHora = document.getElementById('hora')

// function horaAtual(){
//     let agora = new Date()
// let data = agora.toLocaleDateString()
// let hora = agora.toLocaleTimeString()

// dataHora.innerHTML = `${data} ${hora}`

// }
// setInterval(horaAtual, 1000)
// horaAtual()


// teclado.forEach(botao => {
//     botao.addEventListener('click', mostrar) //captar os botoes
// })

document.addEventListener('keydown', function(event) { // função para acaptar as teclas do teclado
    let tecla = event.key // armazena na variavel o evento quando aperta uma tecla
    if(tecla >='0' && tecla <='9'){ // verifica se a tecla é de 0 a 9 e armazena na variavel expressao e mostra na tela
        expressao += tecla
        result.innerHTML = expressao
    }else if (tecla === '+' || tecla === '-' || tecla ==='*' || tecla === '/'){ //verifica se a tecla foi um operador armazena e mostra
        expressao += (tecla === '*')? 'x' : tecla // um tenario pra ver se tecla for * substituir por x 
        result.innerHTML = expressao
    }else if (tecla === "Enter"){ //caso apertar enter ele chama a função calcular
        calcular()
    }else if (tecla ==="Backspace"){  // caso apertar backspace ele zera a expressao e mostrar da tela
        expressao = ''
        result.innerHTML = '0'
    }
    
        
})

function mostrar(n){ //coloca events no lugar do N
    let valor = n           //event.target.value // cria a variavel valor e atribui ao valor que é captado 
    if( valor == 'c'){
        expressao = ''
        operador = ''
        result.innerHTML ='0'
        caractere = ''
    
    }else if (valor == '='){
        calcular()
    }
    else{
        expressao += valor

        result.innerHTML = expressao
    }
    
}

function calcular(){
    let num1 = ''
    let num2 = ''
    let operador = ''
    let resultadoCal = 0

    for (let i = 0; i < expressao.length; i++){
        let caractere = expressao[i]

        if (caractere == '+' || caractere == '-' || caractere == 'x' || caractere == '/'){
            operador = caractere
        }else{
            if(operador == '') {
                num1 += caractere
            }else{
                num2 += caractere
            }
        }

    }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operador){
        case '+':
            resultadoCal = num1 + num2
            break
        case '-':
            resultadoCal = num1 - num2
            break
        case 'x':
            resultadoCal = num1*num2
            break
        case '/':
            resultadoCal = num1/num2
            break
            
    }
    result.innerHTML = resultadoCal 
    expressao = 0      



    
}