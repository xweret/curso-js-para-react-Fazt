
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

// const autos = {
//     ruedas: 'hola mundo desde js'
// }
// const title = document.createElement('h1')
// title.innerText = 'yo soy js'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function () {
//     title.innerText = 'Cambiado desde js'
//     alert('se realizo un click')

// })
// document.body.append(title)
// document.body.append(button)


// Destructuring

// const user = {
//     name: 'Gabriel',
//     age: 22,
// }

// function printInfo (user){
// const { name, age } = user;
// console.log(name, age);
//     return '<h1>Hola ' + name +  '</h1>'
// }
// console.log(printInfo(user))
// document.body.innerHTML = printInfo(user)

// const button = document.createElement('button')
// button.innerText = 'click me gato'

// function handleClick(){
//     alert('clicked')
// }

// button.addEventListener('click', handleClick)

// document.body.append(button)

// //add event listener con function anonima 

// function sumar(y , x){
//     return x + y
// }

// const sumarFlecha = (x, y) => {
//     return x + y
// }

// console.log(sumarFlecha(20, 30))

// const showBolean = () => 'i m a bolean' + true
// const showNumber = () => 22
// const showText = () => [1,2,3]
// const showObjet = () => {
//     ({name: 'ryan'})
// }

// console.log(showBolean())
// console.log(showNumber())
// console.log(showText())

// console.log(showObjet())


const isAuthorized = false 

const button = document.createElement('button')
button.innerText = 'click me gato'

// console.log(showBolean())



button.addEventListener('click', () => { 
    if (isAuthorized) {

    return  alert('autorizao');
    }
        alert('notclicked');
    });

document.body.append(button)

