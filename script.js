// function yellowFunction(psw, confPsw) {
//     if (psw.length >3)
//
// }

// function yellowFunction(arg) {
//     return arg === 'hello' ? '123' : 5454;
//
// }
//
// console.log(yellowFunction('hello'))

// 1
// function yellowFunction(str) {
//     str = str.trim()
//     str = str.slice( str.indexOf(' ')+1) + ' ' + str.slice(0, str.indexOf(' '))
//     str = str.slice(0, str.lastIndexOf('o')) + "a"
//     return str
//
// }
// console.log(yellowFunction( '   hello world   '))

//2
// function yellowFunction(str) {
//     str =  str.length
//     if(str % 2 == 0){
//         return true
//     } else {
//         return false
//     }
//     return str
// }
//
// console.log(yellowFunction('hello world'))

//3
// function yellowFunction(str) {
//       str = str.slice(0, str.indexOf(' ' , str.toUpperCase()))
//     return str
// }
// console.log(yellowFunction('lorem ipsum dolor sit amet'))


//4
// function yellowFunction(prise,discount) {
//     prise= prise - (prise*discount/100)
//     return prise
// }
//
// console.log(yellowFunction( 30 , 20))

//5
// function yellowFunction(str) {
//     if (typeof str === 'string' ){
//         return 'Это строка'
//     } else {
//         return 'Это не строка'
//     }
// }
//
// console.log(yellowFunction(47534793))

//6
// function yellowfunction(str) {
//     if (str.length !== 0){
//         if (str.length >=4 && str.length <10){
//             if (str.length % 2){
//                 return 'Четное'
//             }else {
//                 return 'нет'
//             }
//
//         }else {
//             return 'not found'
//         }
//         return 'empty'
//     }
//
// }
//
// console.log(yellowFunction('пенр '))
//


//3
// function yellowFunction(str) {
//     str = str.replace(' ','')
//     str = str[0].toUpperCase() + str
//         .slice(1,5)+str[5]
//         .toUpperCase()+str
//         .slice(6,10)+str[10]
//         .toUpperCase()+str
//         .slice(11,15)+str[15]
//         .toUpperCase()+str
//         .slice(16,18)+str[18]
//         .toUpperCase()+str
//         .slice(19,22)
//     return `${str}`
//
// }
//
// console.log(yellowFunction(' lorem ipsum dolor sit amet'))
//
