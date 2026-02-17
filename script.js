function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa dos números válidos');
        return null;
    }
    
    return { num1, num2 };
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado.toFixed(2);
}

function sumar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        mostrarResultado(numeros.num1 + numeros.num2);
    }
}

function restar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        mostrarResultado(numeros.num1 - numeros.num2);
    }
}

function multiplicar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        mostrarResultado(numeros.num1 * numeros.num2);
    }
}

function dividir() {
    const numeros = obtenerNumeros();
    if (numeros) {
        if (numeros.num2 === 0) {
            alert('No se puede dividir entre 0');
            return;
        }
        mostrarResultado(numeros.num1 / numeros.num2);
    }
}