let areaASeguir = prompt('Qual área você gostaria de seguir? | DIGITE 1 PARA FRONT-END OU 2 PARA BACK-END')
let linguagem = ''


if (areaASeguir == 1) {
    linguagem = prompt('Qual área do Front-End você deseja se especializar? | DIGITE 1 PARA REACT OU 2 PARA VUE')
} else if (areaASeguir == 2) {
    linguagem = prompt('Qual área do Back-End você deseja se especializar? | DIGITE 1 PARA C# OU 2 PARA JAVA')
};

let seguirFullstack = prompt('Você quer seguir na área escolhida ou deseja se tornar um DEV Fullstack? | DIGITE 1 PARA SEGUIR OU 2 PARA SE TORNAR FULLSTACK')

if (seguirFullstack == 1) {
    alert('Continue assim para evoluir ainda mais! ')
} else if (seguirFullstack == 2) {
    alert('Que legal! Vamos juntos nessa!')
}
let mensagemFinal = prompt('Tem outra linguagem que deseja aprender? | DIGITE 1 PARA SIM OU 2 PARA NÃO')

while (mensagemFinal == 1) {
    let novaLinguagem = prompt('Qual?')
    alert(`${novaLinguagem} é muito legal!`)
    mensagemFinal = prompt('Deseja adicionar mais alguma linguagem? | DIGITE 1 PARA SIM OU 2 PARA NÃO')
}
if (mensagemFinal == 2) {
    alert('Obrigado por participar!')
}