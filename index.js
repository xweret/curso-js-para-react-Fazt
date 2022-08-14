
// function hello(){
//     username = prompt('username por favor')
//     console.log('hola' + username)

// }
// hello('gabriel')

// function hello(){
//     return function (){
//         return 'holamundo'
//     }

// }

// console.log(hello()())

// function saludar(name){
//     return 'Buenas tardes, ' + name

// }

// console.log(saludar('Ryan'))

// function sumar(x,y =0){
//     return x + y 
// } 

// console.log(sumar(2))

// const name = 'laptop'
// const price = 3000

// const newProduct = {
//     name, price
// }

// console.log(newProduct.name)

const autos = {
    ruedas: 'hola mundo desde js'
}
const title = document.createElement('h1')
title.innerText = autos.ruedas
const button = document.createElement('button')
button.innerText = 'click'
button.addEventListener('click', function(){
    console.log('hola mundo')
})
document.body.append(title)
document.body.append(button)