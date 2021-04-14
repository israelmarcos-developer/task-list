import { ordenaDatas, removeDatasRepetidas } from '../service/data.js'
import { criaData } from './criaData.js'

// função carrega tarefa
export const carregaTarefa = () => {

    const lista = document.querySelector('[data-list]' )
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))||[]

    lista.innerHTML = " "
    const dataUnica = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(dataUnica)
    dataUnica.forEach((dia)=>{
        lista.appendChild(criaData(dia))
    })
}

