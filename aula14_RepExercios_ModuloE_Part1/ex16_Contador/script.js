function contar(){
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<p>Impossivel contar</p>'
        alert('Erro, preencher todos os dados')
    }else{
        res.innerHTML = `<p>Contando...</p> <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo Invalido considerando passo 1')
            p = 1
        }

        if ( i < f){
            for (var contador = i; contador <= f; contador += p){
            
                res.innerHTML += ` ${contador} \u{1F449}` // exibir o contador e o proximo. 
            }
        }else{
            for ( var contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F449}`
            }
            
        }
        res.innerHTML +=`\u{1F3c1}`

    }
    

    
}