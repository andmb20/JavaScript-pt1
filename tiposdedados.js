/*
    Tipos de dados:
    TEXTOS = STRINGS
    TEMPLATE STRINGS
    NÚMEROS = NUMBERS
    BOLEANO = BOOLEAN
    OBJETOS = OBJECTS
    NULO / INDEFINIDO = NULL / UNDEFINED
*/

//  TEXTOS = STRINGS

//  ASPAS DUPLAS
const aspasduplas = "Podemos colocar textos JavaScript utilizando aspas duplas"
//  ASPAS SIMPLES
const aspassimples = 'Podemos tambem utilizar aspas simples'
//  CRASE = Permite pular linha.
const templatestrings = `e tambem utilizando 
Template Literals tambem conhecido como 
Template String ou
CRASE`

console.log(aspasduplas)
console.log(aspassimples)
console.log(templatestrings)

//  NÚMEROS = NUMBERS

const sum = 2 + 5

console.log(sum)

/*  BOLEANO = BOOLEAN
    Famoso 0 ou 1 ; TRUE or FALSE
*/

/*  OBJETOS = OBJECTS
    O objeto é uma coleção de propriedades e uma propriedade é uma associação entre um nome (ou chave) e um valor
*/

const andre = {
    name: "André",
    age: 8 + 16,
    country: "Brazil"
}

console.log(andre)

/*
    NULO / INDEFINIDO = NULL / UNDEFINED
    null = deixar vago de propósito, muitas das vezes para o cliente definir, ex.: nome do conjuge "nem todo mundo é casado"
    undefined = errei no código
*/

const user = {
    name: "Wagner José",
    age: null
}

console.log(user) // console de pesquisa pelo objeto elemento "user"

console.log(user.age) // console de pesquisa "user" acessando dentro do objeto "age" de literal nulo ou vazio

console.log(user.country) // console de pesquisa "user" tentando acesso em "country" porem não existe => undefined




