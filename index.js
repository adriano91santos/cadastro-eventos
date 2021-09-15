var meuNome = "Adriano"
var dataAtual = 09
var dataEvento = 22
var idadeParticipante = 30
var participantes = ["Vanessa", "Richard", "Joel", "Carol"]
var permitirCadastro = true

if (dataEvento < dataAtual){
    console.log("Evento não permitido por data inválida!")
    permitirCadastro = false
}

if (idadeParticipante < 18){
    console.log("Evento não permitido pela idade!")
    permitirCadastro = false
}

if (participantes.length > 100){
    console.log("Cadastro não permitido por ter excedido o limite de pessoas!")
    permitirCadastro = false
}

if (permitirCadastro){
    participantes.push(meuNome)
    console.log("Cadastro realizado com sucesso!")
}else{
    console.log("Houve problemas para se cadastrar!")
}

console.log("Listando os participantes:")
for(let i=0; i<participantes.length; i++){
    console.log(participantes[i])
}