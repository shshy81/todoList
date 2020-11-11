<template>
  <div>
      Completed Todo : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
    computed: {
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo() {
            // return this.$store.state.todos.filter(todo => todo.checked).length;
            // return this.todos.filter(todo => todo.checked).length;
            // module 사용위해 변경
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>