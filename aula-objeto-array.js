//let nome = "Raissa"
var sobrenome = "Eugenio"
const end = "Rua Tal"


const calculaMedia = (n1, n2, n3) => {
    return (n1+n2+n3) / 3 
}

const endereco = [10, calculaMedia, "Rua Tal", "indaia", {cidade: "Caragua", estado: "SP"}]

const user = {
    nome: "Raissa",
    'sobre nome': "Eugenio",
    end: endereco,
    idade: 41,
    notas: [7, 8, 10],
    media: calculaMedia
}


user.media()

console.log(`O aluno ${user.nome} tem média ${user.media(user.notas[0], user.notas[1], user.notas[2])}`)


console.log(endereco[2])


const corUser = "primary" // front end enviou


const tema = {
    primary: "#eec910ff",
    primaryDark: "#b6932aff",
    secundary: "#d2681dff",
}



const express = () => {
    return {
        get: () => {console.log('funcao get')},
        post: () => {console.log('funcao post')},
        listen: () => {console.log('funcao listen')}
    }
}


const app = express()

app.get()
app.post()
app.listen()

// JSON
const pessoa = `{
    "nome": "Raissa",
    "sobrenome": "Eugenio",
    "idade": 17
}` 

const pessoaObj = JSON.parse(pessoa)

const obj = {
    nome: "Raissa",
    sobrenome: "Eugenio",
    idade: 17,
}

// const nome = obj.nome
// const sobrenome = obj.sobrenome
// const idade = obj.idade

const {nome, sobrenome, idade} = obj

console.log(nome)


const JSONpessoa = JSON.stringify(obj)

console.log(JSONpessoa)