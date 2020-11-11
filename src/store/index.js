import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    // state 데이터가 들어가는 곳
    state: {
        todos : [
            {id:1, text: 'Buy a car', checked: false},
            {id:2, text: 'play game', checked: false},
          ]
    },
    // data 를 바꾸는 곳
    // App.vue에 있는 함수를 mutations로 옮기기- this 대신 state 사용
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
            // state.todos = state.todos.filter(todo => todo.id != todoId);
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        },
    },
    // actions 함수가 들어가는 곳, 비동기 작업 후 state의 정보를 변경할때 사용
    actions: {
        
    },
    // computed같은 곳
    getters: {

    }
});
