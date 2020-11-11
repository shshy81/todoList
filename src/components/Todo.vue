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
    methods: {
      toggleCheckbox(e) {
        // 부모의 todos의 checked를 변경해줘햐 하니 emit 사용
        // this.$emit('toggle-checkbox', {
        //   _id : this.todos.id,
        //   _checked : e.target.checked
        // });
        this.$store.commit('TOGGLE_TODO', {
          _id : this.todos.id,
          _checked : e.target.checked
        });
      },
      clickDelete() {
        // this.$emit('click-delete', this.todos.id);
        this.$store.commit('DELETE_TODO', this.todos.id);
      }
    },
}
</script>
