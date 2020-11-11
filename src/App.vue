<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo List</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      todoText: '',
      // todos : [
      //   {id:1, text: 'Buy a car', checked: false},
      //   {id:2, text: ' lay game', checked: false},
      // ]
    }
  },
  methods: {
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false
    //   });
    //   this.todoText = '';
    // },
    // 인자 받을때 객체형태로 받았으니 사용할때도 객체로 쓰기
    // { }
    // toggleCheckbox({_id, _checked}) {
    //   const index = this.todos.findIndex(todo => todo.id === _id);
    //   this.todos[index].checked = _checked;
    // },
    // deleteTodo(_id) {
    //   this.todos = this.todos.filter(todo => todo.id != _id);
    // }
  }
}
</script>
