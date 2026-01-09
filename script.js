const resultado = document.querySelector('.resultado')
const placar1 = document.querySelector('.placar1')
const placar2 = document.querySelector('.placar2')
const emojis = { pedra: "🗿", papel: "📄", tesoura: "✂️"}

let pontosUsuario = 0
let pontosMaquina = 0

const escolhaUsuario = (escolhahumana) => {

    iniciarJogo(escolhahumana, escolhaMaquina())
}

const escolhaMaquina = () => {

    const opcoes = ['pedra', 'papel', 'tesoura']
    const escolhaAleatoria = Math.floor(Math.random() * 3)
    return opcoes[escolhaAleatoria]
}

const iniciarJogo = (humano, maquina) => {

    console.log('humano:', humano + ' maquina: ' + maquina)

    if (humano === maquina) {
        resultado.innerHTML = 'EMPATE!'
        alert(`${emojis[humano]} vs ${emojis[maquina]} ➝ EMPATE!`)
    }
    else if (
        humano === 'papel' && maquina === 'pedra' ||
        humano === 'pedra' && maquina === 'tesoura' ||
        humano === 'tesoura' && maquina === 'papel'
    ) {
        pontosUsuario++
        placar1.innerHTML = pontosUsuario

        resultado.innerHTML = 'VOCÊ VENCEU!'
        alert(`${emojis[humano]} vs ${emojis[maquina]} ➝ VOCÊ VENCEU! 🎉`)
    }
    else {
        pontosMaquina++
        placar2.innerHTML = pontosMaquina

        resultado.innerHTML = 'VOCÊ PERDEU!'
        alert(`${emojis[humano]} vs ${emojis[maquina]} ➝ A MÁQUINA VENCEU! 🤖`)
    }
}