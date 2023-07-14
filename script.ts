// exercise 1

// Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
// mensagem explicativa, conforme exemplos

function someNumbers(num1: number, num2: number) {
    let message: string = `SOMA = ${num1 + num2}`
    return console.log(message)
}
someNumbers(10, 30)

// exercise 2

// Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatro
// casas decimais conforme exemplos.

function circleArea(radius: number) {
    let area: number = Math.PI * Math.pow(radius, 2)
    let message: string = `A = ${area.toFixed(4)}`
    return console.log(message)
}
circleArea(2.00)

// exercise 3

// Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto
// de A e B pelo produto de C e D segundo a fórmula: DIFERENÇA = (A * B - C * D).

function productsDifference(num1: number, num2: number, num3: number, num4: number) {
    let product: number = (num1 * num2) - (num3 * num4)
    let message: string = `DIFERENÇA = ${product}`
    return console.log(message)
}
productsDifference(5, 6, 7, 8)

// exercise 4

// Fazer um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por
// hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas
// decimais.

let employee: {
    id: number;
    workHours: number;
    hourValue: number;
}

function calcSalary(id: number, workHours: number, hourValue: number) {
    employee = {
        id: id, workHours: workHours, hourValue: hourValue,
    }

    let salary: number = employee.workHours * employee.hourValue

    let message = `NUMBER = ${employee.id}
    SALARY = U$ = ${salary}`
    return console.log(message)
}
calcSalary(25, 100, 5.50)

// exercise 5

// Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o
// código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Calcule e mostre o valor a ser pago.

function PosSystem(product1: number[], product2: number[]) {
    let totalValue: number = (product1[1] * product1[2]) + (product2[1] * product2[2])
    let message: string = `VALOR A PAGAR: R$ ${totalValue}`
    return console.log(message)
}
PosSystem([12, 1, 5.30], [16, 2, 5.10])

// exercise 6

// Fazer um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e
// mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.


function calcFigures(valA: number, valB: number, valC: number) {
    // triangle area
    let triangleArea: number = (valA * valC) / 2
    // circle area
    let circleArea: number = Math.PI * Math.pow(valC, 2)
    // trapeze area
    let trapezeArea: number = (valA + valB) * valC / 2
    // square area
    let squareArea: number = valB ** 2
    // rectangle area
    let rectangleArea: number = valA * valB

    let message = `TRIANGULO: ${triangleArea.toFixed(3)}
    CIRCULO: ${circleArea.toFixed(3)}
    TRAPÉZIO: ${trapezeArea.toFixed(3)}
    QUADRADO: ${squareArea.toFixed(3)}
    RETÂNGULO: ${rectangleArea.toFixed(3)} `

    return console.log(message)
}

calcFigures(3, 4, 5.2)
