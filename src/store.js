import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {todos: [], loading: false}

const actions = {
     addTodo({ commit }, todo){
         commit('setLoading', true)
         return new Promise(resolve => {
             setTimeout(() => {
                 todo.id = Date.now()
                 commit('addTodo', todo)
                 commit('setLoading', false)
                 resolve(todo)
             }, 500);
 
         })
     },

     toggleTodo({ commit }, todo){
        commit('toggleTodo', todo)
     },

     removeTodo({ commit }, todo){
         commit('removeTodo', todo)
     },

     checkAll({ commit, state }){
        const uncheckedsId = state.todos.filter(todo => !todo.checked).map(todo => todo.id)
        commit('toggleList', uncheckedsId)
     },

     uncheckAll({ commit, state }){
        const checkeds = state.todos.filter(todo => todo.checked).map(todo => todo.id)
        commit('toggleList', checkeds)
     },

     removeAllCheckeds({ commit, state }){
        const checkeds = state.todos.filter(todo => todo.checked).map(todo => todo.id)
        commit('removeList', checkeds)
     }
}

const getters = {
    uncheckeds(state){
        return state.todos.filter(todo => todo.checked === false)
    },

    checkeds(){
        return state.todos.filter(todo => todo.checked === true)
    }
}

const mutations = {
    addTodo(state, payload){
        state.todos.push(payload)
    },

    setLoading(state, payload){
        state.loading = payload
    },

    toggleTodo(state, payload){
        const index = state.todos.findIndex(item => item.id === payload.id);

        const temp = {
          id: state.todos[index].id,
          description: state.todos[index].description,
          checked: !state.todos[index].checked
        };
  
        if (index > -1) {
          const checked = !state.todos[index].checked;
          Vue.set(state.todos, index, temp);
        }
    },

    removeTodo(state, payload){
      state.todos = state.todos.filter(item => item.id !== payload.id)  
    },

    toggleList(state, todosId){
        const todos = state.todos.map((item) => {
            return todosId.includes(item.id) ? {...item, checked: !item.checked} : item
        })

        state.todos = todos
    },

    removeList(state, todosId){
        const todos = state.todos.filter(item => !todosId.includes(item.id))
        state.todos = todos;
    }

}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store