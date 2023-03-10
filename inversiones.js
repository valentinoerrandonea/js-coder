let interesGanado = 0
let interesAcumulado = 0
let inversionInicial = 0
let capitalTotal = 0
let capitalFinal = 0
let multiplicadorDeInteres = 1

function calcularInteresGanado (inversion){
    let interesGanado = inversion * 0.1
    return interesGanado
}



alert('Bienvenido a mi primer simulador hecho con JavaScript.\nEste es un simulador de inversiones en el que podemos calcular su capital durante 12 meses dando la opcion de reinvertir o no las ganancias cada 3 meses. ')

inversionInicial = Number(prompt(' En esta inversion usted recibira un interes del 1% mensual.\nCual sera tu inversion inicial?'))

alert('Comencemos! Su inversion inicial fue de: $'+inversionInicial)

for (let i = 1; i <= 12; i++ ) {
    interesGanado = calcularInteresGanado(inversionInicial)
    interesAcumulado = (interesGanado * (multiplicadorDeInteres++))
    capitalTotal = inversionInicial + interesAcumulado
    alert('Su ganancia durante el mes '+ i + ' fue de: $'+interesGanado)
    alert('Su capital hasta ahora es de: $'+capitalTotal)
    
    if (i == 3 || i == 6 || i == 9){
        const reinvertir = confirm('Desea reinvertir sus intereses acumulados hasta este mes?')
        if (reinvertir === true){
            inversionInicial = capitalTotal
            interesAcumulado = 0
            multiplicadorDeInteres = 1
        } else  inversionInicial
    } else continue
    
}

capitalFinal = inversionInicial + interesGanado
alert('Su inversion final fue de: $'+inversionInicial+'\nSu capital final es de: $'+capitalFinal)