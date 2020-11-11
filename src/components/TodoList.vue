<template>
    <div>
        <Todo 
            v-for="todo in getTodos" :key="todo.id"
            :todos = "todo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    computed: {
        getTodos() {
            return this.$store.state.todos;
        }
    },
}
</script>

<style>

</style>
