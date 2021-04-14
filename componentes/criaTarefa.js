
import {carregaTarefa} from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

// função novo item
export const NovoItem = (evento) => {

    evento.preventDefault() // cancela evento padrão

    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[] // analisa string e pegando valor
    
    const input = document.querySelector('[data-form-input]') // busca objeto no dom
    const valor = input.value // acessando conteúdo do input

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:MM')

    const dataFormatada = data.format('DD/MM/YYYY') // formatando exibição data
    const concluida = false

    const dados = { 
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados] //

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
}
// função tarefa
export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')

    const conteudo = `<p class="content">${horario} * ${valor}</p>`

    if(concluida){
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))
   
    return tarefa
}