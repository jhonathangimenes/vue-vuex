<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        <h3>Tarefas concluidas ({{ totalDeTarefasAFazer }})</h3>
        <ul class="list-group" v-if="tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa concluida.</p>

        <h3>Tarefas concluidas ({{ totalDeTarefasConcluidas }})</h3>
        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa concluida.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />


    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'
import { setTimeout } from 'timers';

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    created() {
        setTimeout(() => {
            this.listarTarefas({
                tarefas: [
                    { id: 1, titulo: 'Aprender Vue', concluido: true },
                    { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                    { id: 3, titulo: 'Aprender Vuex', concluido: false }
                ]
            })
        }, 1000)
    },
    computed: {
        ...mapState('tarefas', ['tarefas']),
        ...mapGetters('tarefas', [
            'tarefasConcluidas',
            'tarefasAFazer',
            'totalDeTarefasConcluidas',
            'totalDeTarefasAFazer'
        ])
    },
    methods: {
        ...mapActions('tarefas', ['listarTarefas']),
        exibirFormularioCriarTarefa(event) {
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    }
}
</script>
