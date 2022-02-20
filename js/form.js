var botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagemDeErro(erros);
        return
    }

    var ul = document.querySelector('#erros');
    ul.innerHTML = ""

    adicionaPacienteNaTabela(paciente);

    form.reset();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTR(paciente); 
    var tabela = document.querySelector('#tabela-pacientes'); 
    tabela.appendChild(pacienteTr);

}


function obtemPacienteDoFormulario(form){
    var form = document.querySelector('#form-adiciona');

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector('#erros');

    ul.innerHTML = "";

    erros.forEach(erro => {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
    });
}

function montaTR(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push('Nome é Inválido!');
    }

    if(!validaPeso(paciente.peso)){
        erros.push(' O peso é inválido!');
    }

    if(!validaAltura(paciente.altura)){
        erros.push(' A altura é inválida!');
    }

    if(!validaGordura(paciente.gordura)){
        erros.push('Percentual de gordura inválido!');
    }
    return erros;
}