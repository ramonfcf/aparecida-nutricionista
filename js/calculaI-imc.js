var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(i = 0; i < pacientes.length; i++ ){
    let paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso =  tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido');
    } else if (!alturaEhValida) {
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido');
    } else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 400){
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura){
    if (altura <= 0 || altura > 3.00){
        return false;
    } else {
        return true;
    }
}

function validaGordura(gordura){
    if (gordura <=0 || gordura > 100){
        return false;
    } else {
        return true;
    }
}