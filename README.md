## Desafio Warren

# Tecnologia usada
<ul>
    <li>JavaScript</li>
</ul>

# Rodando os desafios
<hr>
<ol>
    <li>Clone o repositório em sua máquina.</li>
    <li>Caso você tenha NodeJS é só digitar no terminal <code>node + "nome do arquivo"</code></li>
    <li>Caso não tiver abra o arquivo <code>index.html</code> que está no repositório, aperte f12 e vá em console no seu navegador</li>
</ol>
<p>OBS: Se rodar pelo arquivo index.html os desafios vão ser executados juntos.</p>

## Desafios
<hr>

# Desafio 1

<p>Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.</p>
<br>
<p>Existem 120 números reversíveis abaixo de 1000.</p><br>

<p>Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.</p>

# Desafio 2

<p>Um professor de programação, frustrado com a falta de disciplina de seus alunos, decidi cancelar a aula se menos de x alunos estiverem presentes quando a aula for iniciada. O tempo de chegada varia entre:</p>

<ul>
    <li>Normal: tempoChegada <= 0</li>
    <li>Atraso: tempoChegada > 0</li>
<p>Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).</p>

<p>Exemplo:<p><br>

<p>Entrada de dados:
x = 3
tempoChegada = [-2, -1, 0, 1, 2]

Saída de dados:
Aula normal.
</p>
<p>Explicação:</p><br>
<p>Os três primeiros alunos chegaram no horário. Os dois últimos estavam atrasados. O limite é de três alunos, portanto a aula não será cancelada.<p>