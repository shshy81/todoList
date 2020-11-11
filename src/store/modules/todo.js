export default {
    namespaced: true,
    state: {
        todos : [
            {id:1, text: 'Buy a car', checked: false},
            {id:2, text: 'play game', checked: false},
          ],
        
    },
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {_id, _checked}) {
            const index = state.todos.findIndex(todo => todo.id === _id);
            state.todos[index].checked = _checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        },
    },
    actions: {
        addTodo({ commit }, value) {
            setTimeout(() => commit('ADD_TODO', value), 500);
        },
        toggleTodo({ commit }, {_id, _checked}) {
            setTimeout(() => commit('TOGGLE_TODO', {_id, _checked}), 500);
        },
        deleteTodo({ commit }, _id) {
            setTimeout(() => commit('DELETE_TODO', _id), 500);
        }
    },
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}