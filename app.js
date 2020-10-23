const peso = document.getElementById('peso');
const estatura = document.getElementById('estatura');
const result = document.getElementById('res');
const texto = document.querySelector('.text')
const btn = document.querySelector('.btn input');


btn.addEventListener('click', calculo);

function calculo(){
   
    const valid = validar();
    if(valid === 'ok'){
        const a = parseInt(peso.value);
        const b = parseFloat(estatura.value)**2;
        const resultado = (a / b).toFixed(1);
        pantalla(resultado);
        diagnostico(resultado);
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

function pantalla(resultado){
    result.textContent = resultado;
    limpiarHTML();
    setTimeout(() => {
        result.textContent = '-';
    }, 4000);
}

function limpiarHTML(){
    peso.value = '';
    estatura.value = '';
}

function diagnosticoHTML(msn){
    texto.textContent = msn;
}

function diagnostico(resultado){

    if (resultado < 18.5){
        const msn = "Tu peso es inferior al normal";
        texto.classList.remove('superior','normal');
        texto.classList.add('inferior');
        diagnosticoHTML(msn);
        removeDiagnostico();
        return
    }else if(resultado > 18.5 && resultado < 24.9){
        const msn = "Tu peso es normal"; 
        texto.classList.remove('superior','inferior');
        texto.classList.add('normal');
        diagnosticoHTML(msn);
        removeDiagnostico();
        return
    }else if(resultado > 25 && resultado < 29.9){
        const msn = "Tu peso es superior al normal"; 
        texto.classList.remove('superior','normal');
        texto.classList.add('inferior');
        diagnosticoHTML(msn);
        removeDiagnostico();
        return
    }else if(resultado > 30){
        const msn = "Obesidad"; 
        texto.classList.remove('inferior','normal');
        texto.classList.add('superior');
        diagnosticoHTML(msn);
        removeDiagnostico();
        return
    }
}

function removeDiagnostico(){
    setTimeout(() => {
        texto.remove();
    }, 4000);
}