var nome = prompt('Digite seu nome!')
var text
if (nome == null || nome == "") {
    text = 'Olá pessoa, seja bem-vindo(a)!'
} else {
    text = `Olá ${nome}, seja bem-vindo(a)!`
}
//alert(text)
document.write(text)


var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('você não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é opcional')
} else {
    console.log('Seu voto é obrigatório')
}


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

var agora = new Date()
var diaSem = agora.getDay()

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado


switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia invalido!')
        break
}
