let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []  

function isNumero(){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {

    if (num.value) {
        alert('Insira um numéro válido!')
    } else {
        let numeroInput = Number(num.value)
        let count = 1
        tabela.innerHTML = ''
        while (count <= 1) {
            let item = document.createElement('option')
            item.text = `Valor ${numeroInput} adicionado.`
            item.value = `tab${count}`
            tabela.appendChild(item)
            count++
        }
    }
}
function finalizar() {
    alert('onclick funcionando')
}
