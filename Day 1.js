function calculo(a, b, c) {
    soma = a + b;

    if (soma < c) {
        console.log('C é maior que a somo')
    } else {
        console.log('Soma é maior que C')
    }
}

const one = 2;
const two = 5;
const three = 5;
calculo(one, two, three)