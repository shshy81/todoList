<template>
    <div class="mb-2 d-flex">
      <div>
        <input 
          type="checkbox" 
          :checked="propTodos.checked"
          @change="toggleCheckbox"
        />
      </div>
      <span 
       class="ml-3 flex-grow-1"
       :class="propTodos.checked ? 'text-muted': ''"
       :style="propTodos.checked ? 'text-decoration: line-through' : ''"
      >
        {{ propTodos.text }} 
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
      propTodos: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleCheckbox(e) {
        // 부모의 todos의 checked를 변경해줘햐 하니 emit 사용
        this.$emit('toggle-checkbox', {
          _id : this.propTodos.id,
          _checked : e.target.checked
        });
        // console.log(e.target.checked);
      },
      clickDelete() {
        this.$emit('click-delete', this.propTodos.id);
      }
    },
}
</script>
