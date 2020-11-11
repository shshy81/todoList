<template>
    <div class="mb-2 d-flex">
      <div>
        <input 
          type="checkbox" 
          :checked="todos.checked"
          @change="toggleCheckbox"
        />
      </div>
      <span 
       class="ml-3 flex-grow-1"
       :class="todos.checked ? 'text-muted': ''"
       :style="todos.checked ? 'text-decoration: line-through' : ''"
      >
        {{ todos.text }} 
      </span>
      <button 
        class="btn btn-danger btn-sm"
        @click="clickDelete"
      >
        Delete
      </button>
      {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    props: {
      todos: {
        type: Object,
        required: true
      }
    },
    computed: {
      numberOfCompletedTodo() {
            // return this.$store.getters.numberOfCompletedTodo;
            // module 사용위해 변경
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    },
    methods: {
      toggleCheckbox(e) {// module 사용위해 변경
        this.$store.dispatch('todo/toggleTodo', {
          _id : this.todos.id,
          _checked : e.target.checked
        });
      },
      clickDelete() {// module 사용위해 변경
        this.$store.dispatch('todo/deleteTodo', this.todos.id);
      }
    },
}
</script>
