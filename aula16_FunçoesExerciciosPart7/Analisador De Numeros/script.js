let num = document.getElementById('txtNum') //Elemento de HTML sempre colocar o value
let sel = document.getElementById('selExibir')
let qtd = document.getElementById('resNumCad')
let maior = document.getElementById('resMaiorNum')
let menor = document.getElementById('resMenorNum')
let soma = document.getElementById('resSoma')
let media = document.getElementById('resMedia')
let vetor = []

function adicionar(){

    let n = Number(num.value)

    if ( num.value.length == 0 || num.value > 100){
        alert('ERRO, Digite um numero valido')
    }else if(vetor.includes(n)) { //verifica se o valor ja existe no vetor/array
        alert('Valor ja se encontra na lista')
    }
    else{
            vetor.push(n) 
            var option = document.createElement('option')
            option.textContent = `Valor ${n} adicionado.`
            sel.appendChild(option)
        }
    num.value = ''  // limpar o campo txt
    num.focus()     // manter o foco no campo txt 

}
function finalizar(){

    let somaValor = 0 
    let mediaValor = 0

    qtd.innerHTML = `Ao todo tempos ${vetor.length} números cadastrados.`
    let mValor = Math.max(...vetor) //maior valor da array
    maior.innerHTML = `O maior valor informado é ${mValor}`
    vetor.sort((a, b) => a - b)
    menor.innerHTML = `O menor valor informado é ${vetor[0]}`
    for(let cont = 0; cont < vetor.length; cont++){
            somaValor += vetor[cont]
        
    }
    soma.innerHTML = `Somando todos os valores, temos ${somaValor}`
    mediaValor = (somaValor/vetor.length)
    media.innerHTML = `A média dos valores digitado é ${mediaValor}`
}