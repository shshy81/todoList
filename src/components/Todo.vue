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
            return this.$store.getters.numberOfCompletedTodo;
        }
    },
    methods: {
      toggleCheckbox(e) {
        this.$store.dispatch('toggleTodo', {
          _id : this.todos.id,
          _checked : e.target.checked
        });
      },
      clickDelete() {
        this.$store.dispatch('deleteTodo', this.todos.id);
      }
    },
}
</script>
