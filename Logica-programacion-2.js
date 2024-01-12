let opc = prompt('Bienvenido al convertidor de grados Celsius.\ningrese: \nF para Fahrenheit \nK para Kelvin').toLocaleLowerCase();
let gCelcius = parseInt(prompt("Ingrese los grados celcius"));

function Fahrenheit (gCelcius){
    let transFahre = (9/5) * gCelcius + 32
    return transFahre 
}

function Kelvin (gCelcius){
    let transKel = gCelcius + 273.15
    return transKel
}


switch(opc){
    case 'f':
        document.write(`${gCelcius} grados Celcius es igual a: ${Fahrenheit(gCelcius)} grados Fahrenheit`);
        break;
    case 'k':
        document.write(`${gCelcius} grados Celcius es igual a: ${Kelvin(gCelcius)} grados Kelvin`);
        break;
        default:
            document.write("Error ingrese k o f");    
}

