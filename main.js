
// importando componentes
import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    // tarefa principal 
    const criarTarefa = (evento) => {


    //
    evento.preventDefault()

    // selecionando objeto no dom
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    // recebendo valor do input
    const valor = input.value


    // criando objeto na lista
    const tarefa = document.createElement('li')
    // adicionando class ao objeto
    tarefa.classList.add('task')
    // substituindo conteudo
    const conteudo = `<p class="content">${valor}</p>`

    // 
    tarefa.innerHTML = conteudo


    // adiciona um nó
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)