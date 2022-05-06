console.log("Desafio 2")
let x = 5
let tempoChegada = [-3, -2, -1, 0, 2, 3]

verificaAlunos()

function verificaAlunos() {
    let result = tempoChegada.filter((alunos) => {
        return alunos <=0
    })
//Testando se retorna os resultados que eu quero
    console.log(result)
//Verificando se a quantidade de alunos que chegou é maior ou igual a de alunos que deve ter para aula normal
    if(result.length >= x) {
        console.log("Aula normal")
    } else {
        console.log("Aula cancelada")
    }
}