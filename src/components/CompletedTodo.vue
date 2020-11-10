<template>
  <div>
      Completed Todo : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
    props: {
        propTodos: {
            type: Array,
            required: true
        }
    },
    computed: {
        numberOfCompletedTodo() {
            return this.propTodos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style>

</style>