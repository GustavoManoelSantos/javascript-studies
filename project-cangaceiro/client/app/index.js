var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade'),
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    //cancelando a submissão do formulário
    event.preventDefault();
   
    var tr = document.createElement('tr');

    //criando td para exibir os valores dos campos
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    //criando td para exibir volume da negociação
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    //limpando os campos
    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';

    //focar no campo data novamente
    campos[0].focus();

});