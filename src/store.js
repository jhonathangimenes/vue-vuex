import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const tarefasModule = {
    namespaced: true,
    state: {
        tarefas: []
    },
    getters: {
        tarefasConcluidas: (state) => {
            return state.tarefas.filter(t => t.concluido)
        },
        tarefasAFazer: (state) => {
            return state.tarefas.filter(t => !t.concluido)
        },
        totalDeTarefasConcluidas: (state, getters) => {
            return getters.tarefasConcluidas.length
        },
        totalDeTarefasAFazer: (state, getters) => {
            return getters.tarefasAFazer.length
        },
        buscarTarefa: (state) => {
            return (id) => {
                return state.tarefas.find(t => t.id === id)
            }
        }
    },
    mutations: {
        listarTarefas: (state, payload) => {
            setTimeout(() => {
                state.tarefas = payload.tarefas
            }, 2000)
        }
    },
    actions: {
        listarTarefas: (context, payload) => {
            context.commit('listarTarefas', payload)
        }
    }

}

const contadorModule = {
    namespaced: true,
    state: {
        contador: 0
    }
}

const store = new Vuex.Store({
    modules: {
        tarefas: tarefasModule,
        contador: contadorModule
    }
})

export default store