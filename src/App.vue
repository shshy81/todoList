<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo List</h1>
    <input 
      type="text" class="w-100 p-2" placeholder="add Here"
      @keyup.enter="addTodo"
      v-model="todoText"
    />
    <hr>
    <Todo 
      v-for="todo in todos" :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckBox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText: '',
      todos : [
        {id:1, text: 'Buy a car', checked: false},
        {id:2, text: 'play game', checked: false},
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.todoText = '';
    },
    toggleCheckBox({_id, _checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === _id;
      });
      this.todos[index].checked = _checked;
    },
    deleteTodo(_id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === _id;
      // });
      // this.todos.splice(index, 1);
      this.todos = this.todos.filter(todo => todo.id != _id);
    }
  }
}
</script>
