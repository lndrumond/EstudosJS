let amigo = {
    nome:'Jose',
    peso: 85,
    engordar(p){
        this.peso += p //referencia ao peso do objeto usando o this
        console.log(`Engordou ${p} KG`)
    }
}
amigo.engordar(5)
console.log (`${amigo.nome} pesa ${amigo.peso} KG`)

let s = 'java'
console.log(s.toUpperCase())