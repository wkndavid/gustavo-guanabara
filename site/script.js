function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    // var data = new Date()
    // var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = './image/manhã.png'
        document.body.style.background = '#578A6B'
    } else if(hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = './image/tarde.png'
        document.body.style.background = '#F1A65F'
    } else {
        // Boa noite
        img.src = './image/noite.png'
        document.body.style.background = '#0E0D1F'
    }
}