function funcaoGeral() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultadoIMC');
    const textoResult = document.querySelector('#p-result')

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = parseFloat(document.body.querySelector("#peso").value);
        const altura = parseFloat(document.body.querySelector("#altura").value); 


        if (Number.isNaN(peso) === true || Number.isNaN(altura) === true) {
            resultado.style.backgroundColor = '#ad0000';
            resultado.style.color = '#fff'
            textoResult.innerHTML = `Valor(es) inválido(s)`
            abrir();
            return;
        } else {
            abrir();
            calculoIMC();
        }

        function calculoIMC() {
            const imc = peso / (altura * altura);
            if (imc < 18.5) {
                resultado.style.backgroundColor = '#ff4c4c';
                resultado.style.color = '#fff'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultado.style.backgroundColor = '#01FEC3';
                resultado.style.color = '#000'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
            } else if (imc >= 25 && imc <= 29.9) {
                resultado.style.backgroundColor = '#fcfc9c';
                resultado.style.color = '#000'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
            } else if (imc >= 30 && imc <= 34.9) {
                resultado.style.backgroundColor = '#ff4c4c';
                resultado.style.color = '#fff'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.style.backgroundColor = '#fc0000';
                resultado.style.color = '#fff'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
            } else {
                resultado.style.backgroundColor = '#ad0000';
                resultado.style.color = '#fff'
                textoResult.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
            }
        }
    }

    function abrir() {
        const resultado = document.querySelector('.resultadoIMC');
        const fecharResultado = document.querySelector('.close-result')
        fecharResultado.style.display = 'block'
        resultado.style.display = 'flex'
    }

    form.addEventListener('submit', recebeEventoForm); 
}

funcaoGeral() 

function fechar() {
    const resultado = document.querySelector('.resultadoIMC');
    resultado.style.display = 'none'
}
