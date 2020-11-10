<template>
    <div class="mb-2 d-flex">
      <div>
        <input 
          type="checkbox" 
          :checked="propTodo.checked"
          @change="toggleCheckbox"
        />
      </div>
      <span 
       class="ml-3 flex-grow-1"
       :class="propTodo.checked ? 'text-muted': ''"
       :style="propTodo.checked ? 'text-decoration: line-through' : ''"
      >
        {{ propTodo.text }} 
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
      propTodo: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleCheckbox(e) {
        // 부모의 todos의 checked를 변경해줘햐 하니 emit 사용
        this.$emit('toggle-checkbox', {
          _id : this.propTodo.id,
          _checked : e.target.checked
        });
        // console.log(e.target.checked);
      },
      clickDelete() {
        this.$emit('click-delete', this.propTodo.id);
      }
    },
}
</script>

