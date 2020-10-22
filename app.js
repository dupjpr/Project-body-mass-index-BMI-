const peso = document.getElementById('peso');
const estatura = document.getElementById('estatura');
const result = document.getElementById('res');
const texto = document.getElementById('text');
const btn = document.querySelector('.btn input');


btn.addEventListener('click', calculo);

function calculo(){
   
    validar();

    // const resultado = a / b;
    // const text = diagnostico(resultado.toFixed(1));
    // pantalla(resultado.toFixed(1), text);
}

let validar = () => {

    if(peso.value === '' || estatura.value === ''){
        const msn1 = 'Los campos no pueden estar vacios'; 
        mensajeHTML(msn1);
        return;
    } else if (peso.value <= 0 || estatura.value <= 0){
        const msn2 = 'Los valores deben ser mayores a cero'; 
        mensajeHTML(msn2);
        return;
    }   
}

function mensajeHTML(msn){
    const msnDiv = document.createElement('div');
    msnDiv.textContent = msn;
    msnDiv.setAttribute('id', 'msn');
    btn.after(msnDiv);
    setTimeout(() => {
        document.getElementById('msn').remove();
    }, 3000);
}


// function pantalla(resultado, text){
//     result.textContent = resultado;
//     texto.textContent = text;
// }


// function diagnostico(resultado){
//     if (resultado < 18.5){
//         return "Tu peso es inferior al normal";
//     }else if(resultado > 18.5 && resultado < 24.9){
//         return "Tu peso es normal";
//     }else if(resultado > 25 && resultado < 29.9){
//         return "Tu peso es superior al normal"
//     }else if(resultado > 30){
//         return ('Obesidad');
//     }else {
//         return "Ingrese valores";
//     }
// }