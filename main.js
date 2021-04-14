// arquivo responsável por executar as tarefas
import{NovoItem} from './componentes/criaTarefa.js'
import{carregaTarefa} from './componentes/carregaTarefa.js'
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', NovoItem)

carregaTarefa()