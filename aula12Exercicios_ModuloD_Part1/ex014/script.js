function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var divData = window.document.getElementById('data')
    var msgHora = window.document.getElementById('msgHora') //transforma div em variavel
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getUTCDate()
    var mes = data.getUTCMonth()
    var ano = data.getFullYear()
    mes += 1
    msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos`
    divData.innerHTML = `Hoje é Dia ${dia}/${mes}/${ano}`
    var hora = 14
    if(hora>= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msgHora.innerHTML = 'Tenha um Bom Dia!'
    }else if (hora >=12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msgHora.innerHTML = 'Tenha uma Boa Tarde!'

    }else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msgHora.innerHTML = 'Tenha uma Boa Noite!'

    }
}

