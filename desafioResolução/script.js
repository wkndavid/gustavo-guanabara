let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []  

function adicionar() {

    if (num.value.length == 0) {
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
