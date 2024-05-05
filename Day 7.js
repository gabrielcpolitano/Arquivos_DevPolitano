function converção(celsius, fahrenheit){
    var celsius
    var fahrenheit

    if (fahrenheit === 0){
        fahrenheit = (celsius * 9/5) + 32;
        console.log(`celsius:${celsius} - fahrenheit:${fahrenheit}`)
    } else {
        celsius = (fahrenheit - 32) * 5/9;
        console.log(`fahrenheit:${fahrenheit} - celsius:${celsius}`)
    }
}

converção(32, 0);