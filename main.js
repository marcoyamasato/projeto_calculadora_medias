const nomeAtividade = document.getElementById('input_nome_ativ')
const notaAtividade = document.getElementById('nota')
const imgAprovado = '<img src="./images/images/aprovado.png" alt="emoji festejando"/>'
const imgReprovado = '<img src="./images/images/reprovado.png" alt="emoji festejando"/>'
const campo_media = document.getElementById('campo_media')
const campo_aprovado_reprovado = document.getElementById('aprovado_reprovado')

const estilo_span_aprovado = '<span class="resultado aprovado">Aprovado</span>'
const estilo_span_reprovado= '<span class="resultado reprovado">Reprovado</span>'


var lista_notas = []
var lista_atividades = []

const body_table = document.querySelector('tbody')

linhas_registradas = ''

addEventListener('submit', function(e){

    e.preventDefault();

    adiciona_linha();

    calcula_media();
    
})

function adiciona_linha(){



    /*outra forma de add linha
    linha2 = `'<tr> <td> ${nomeAtividade.value} </td> <td>${notaAtividade.value} </td> <td> ${notaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>'`
    */
    if(lista_atividades.includes(nomeAtividade.value)){
        alert(`A atividade "${nomeAtividade.value}" já foi incluída.`)
    }
    else{
        
        lista_notas.push(parseInt(notaAtividade.value))
        lista_atividades.push(nomeAtividade.value)

        var linha = '<tr>';
        linha += `<td> ${nomeAtividade.value} </td>`;
        linha += `<td> ${notaAtividade.value} </td>`;
        linha += `<td> ${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}` 
        linha += '</td>'


        linhas_registradas += linha

        body_table.innerHTML = linhas_registradas
    }
    
}

function calcula_media(){
    var soma_notas = 0

    for(var i = 0; i < lista_notas.length; i++){
        soma_notas += lista_notas[i]
    }

    media = soma_notas/lista_notas.length

    campo_media.innerHTML = media.toFixed(2);
    campo_aprovado_reprovado.innerHTML = media >=7 ? estilo_span_aprovado : estilo_span_reprovado
}
