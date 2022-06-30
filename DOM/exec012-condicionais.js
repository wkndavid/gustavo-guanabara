var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
console.log(`${agora}`)
if (hora > 5.9 && hora < 11.9) {
    console.log('Bom dia!')
} else if (hora > 11.9 && hora <= 17.9) {
    console.log('Boa tarde!')
} else if (hora >= 0 && hora < 4.9){
    console.log('Boa Madrugada!')
} else {
    console.log('Boa noite!')
}