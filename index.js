
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

const user = {
    x : 20,
    name: 'Ryan',
    lastname: 'perez',
    age: '30',
    adress: {
        country: 'argentina',
        city: 'chivilcoy',
        street: 'yeca 34',
    },
    friends: ['brand', 'elena'],
    active: true,
    // x = key // 20 = value 
    sendMail: function(){
        return 'sending email...'
    }
}

console.log(user)