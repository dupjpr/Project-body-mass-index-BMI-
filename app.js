const peso = document.getElementById('peso');
const estatura = document.getElementById('estatura');
const result = document.getElementById('res');
const texto = document.getElementById('text');
const btn = document.querySelector('.btn input');


btn.addEventListener('click', calculo);

function calculo(){
    const a = parseInt(peso.value);
    const b = parseFloat(estatura.value) * parseFloat(estatura.value);
    const resultado = a / b
    const text = diagnostico(resultado.toFixed(1));
    pantalla(resultado.toFixed(1), text);
}

function pantalla(resultado, text){
    result.textContent = resultado;
    texto.textContent = text;
}


function diagnostico(resultado){
    if (resultado < 18.5){
        return "Tu peso es inferior al normal";
    }else if(resultado > 18.5 && resultado < 24.9){
        return "Tu peso es normal";
    }else if(resultado > 25 && resultado < 29.9){
        return "Tu peso es superior al normal"
    }else if(resultado > 30){
        return ('Obesidad');
    }else {
        return "Ingrese valores";
    }
}