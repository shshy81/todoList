<template>
    <div>
      {{ todo.checked }}
      <input type="checkbox" :checked="todo.checked" @click="chkUpdate">
      <span class="ml-3" :class="{done: isDone}">{{ todo.text }}</span>
    </div>
</template>

<script>
export default {
    props: {
      todo : {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        isDone: false
      }
    },
    methods: {
      chkUpdate() {
        this.todo.checked = !this.todo.checked;
        this.isDone = !this.isDone;
      }
    }
}
</script>

<style scoped>
.done {text-decoration-line: line-through}
</style>