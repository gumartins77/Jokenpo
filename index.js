const prompt = require(`prompt-sync`)();

let jogar
while (jogar != `n`) {
console.log (`\nBem vindo ao jogo Jokenpô, o famoso pedra-papel-tesoura.
O jogo consiste em você escolher qual elemento irá jogar, e no mesmo momento, o computador também irá escolher um elemento e retorná-lo.
Existem 3 elementos no jogo, pedra, papel e tesoura, as regras para se vencer uma rodada é:
Pedra ganha de tesoura, mas perde para papel.
Papel ganha de pedra, mas perde para tesoura.
Tesoura ganha de papel, mas perde para pedra.
Vence o jogo quem vencer o maior número de rodadas`)
console.log ()
let rod = +prompt (`Primeiramente, escolha o número de rodadas que você quer jogar: `)
    while (isNaN (rod)) {
        console.log (`\nO computador não foi capaz de ler o que foi digitado, por favor digite um número.`)
        rod = +prompt (`Primeiramente, escolha o número de rodadas que você quer jogar: `)
    }
  
console.log (`\nAgora vamos começar o jogo.`)

let user 
let vitUser = 0
let vitPc = 0
let rodEmpt = 0

    for (let i = 0; i < rod; i++) {
let elem = ['pedra', 'papel', 'tesoura'];
let pc = elem[Math.floor(Math.random() * elem.length)];

user = prompt (`Rodada ${i + 1}- Digite seu elemento: [pedra, papel ou tesoura] `).toLowerCase()
    while (user != `pedra` && user != `papel` && user != `tesoura`) {
        console.log (`\nO elemento digitado não pode ser reconhecido pelo computador, por favor digite "pedra", "papel" ou "tesoura".`)
        user = prompt (`Rodada ${i + 1}- Digite seu elemento: [pedra, papel ou tesoura] `).toLowerCase()
    }

    console.log (`\n[O computador jogou ${pc}]`)
    console.log (`\n[Você jogou ${user}]`)

    if (user == `pedra` && pc == `tesoura`) {
        console.log (`\nVOCÊ VENCEU A RODADA.`)
        vitUser++
    } else if (user == `tesoura` && pc == `papel`) {
        console.log (`\nVOCÊ VENCEU A RODADA.`)
        vitUser++
    } else if (user == `papel` && pc == `pedra`) {
        console.log (`\nVOCÊ VENCEU A RODADA.`)
        vitUser++
    } else if (user == pc) {
        console.log (`\nRODADA EMPATADA.`)
        rodEmpt++
    } else {
        console.log (`\nO COMPUTADOR VENCEU A RODADA.`)
        vitPc++
    }
}

console.log (`\nO jogo foi finalizado.`)
console.log (`\nRodadas jogadas: ${rod} rodadas.`)
console.log (`\nRodadas ganhas pelo jogador: ${vitUser} rodadas.`)
console.log (`\nRodadas ganhas pelo computador: ${vitPc} rodadas.`)
console.log (`\nRodadas empatadas: ${rodEmpt} rodadas.`)

if (vitUser > vitPc) {
    console.log (`\nPlacar final: ${vitUser}(jogador) a ${vitPc}(computador).`)
    console.log (`\nJOGADOR VENCEU!!!`)
} else if (vitPc > vitUser) {
    console.log (`\nPlacar final: ${vitPc}(computador) a ${vitUser}(jogador).`)
    console.log (`\nCOMPUTADOR VENCEU!!!`)
} else {
    console.log (`\nPlacar final: ${vitUser}(jogador) a ${vitPc}(computador).`)
    console.log (`\nEMPATE.`)
}

    jogar = prompt (`Desejar jogar novamente?[s/n] `).toLowerCase()
    while (jogar != `s` && jogar != `n`) {
    console.log (`\nResposta invalida, digite "s" para sim ou "n" para não.`)
    jogar = prompt (`Desejar jogar novamente?[s/n] `).toLowerCase()
    }
        if (jogar == `s`) {
            console.log (`\nReiniciando o jogo...`)
        }
}

console.log (`\nO jogo foi finalizado. Muito obrigado por jogá-lo, volte sempre.`)