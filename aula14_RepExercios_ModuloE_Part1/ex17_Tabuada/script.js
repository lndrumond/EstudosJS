function calcular(){
    var num = document.getElementById('txtNum')
    var res = document.getElementById('res')
    if (num.value.length == 0){
        alert('ERRO, Digite um numero')
    }else{
        var n = Number(num.value)
        res.innerHTML = '' //limpa o select para mostrar o proximo
        for(var contador = 1; contador <= 10; contador++){
            var option = document.createElement('option') //cria um elemento option
            option.textContent = `${n}x${contador} = ${n*contador}`
            res.appendChild(option) //adiciona um filho no select res
        }
    }
}