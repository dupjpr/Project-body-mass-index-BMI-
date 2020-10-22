const peso = document.getElementById('peso');
const estatura = document.getElementById('estatura');
const result = document.getElementById('res');
const texto = document.querySelector('.text')
const btn = document.querySelector('.btn input');


btn.addEventListener('click', calculo);

function calculo(){
   
    const valid = validar();
    if(valid === 'ok'){
        const a = peso.value;
        const b = estatura.value;
        const resultado = (a / b).toFixed(1);
        const msnDiagnostico = diagnostico(resultado);
        pantalla(resultado, msnDiagnostico);
    }
}

let validar = () => {
    if(peso.value === '' || estatura.value === ''){
        const msn1 = 'Los campos no pueden estar vacios'; 
        mensajeErrorHTML(msn1);
        return;
    } else if (peso.value <= 0 || estatura.value <= 0){
        const msn2 = 'Los valores deben ser mayores a cero'; 
        mensajeErrorHTML(msn2);
        return;
    } else {
        return 'ok'
    }
}

function mensajeErrorHTML(msn){
    const msnDiv = document.createElement('div');
    msnDiv.textContent = msn;
    msnDiv.setAttribute('id', 'msn');
    btn.after(msnDiv);
    setTimeout(() => {
        document.getElementById('msn').remove();
    }, 3000);
}

function pantalla(resultado, diagnostico){
    result.textContent = resultado;   
    texto.textContent = diagnostico;
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
    }
}