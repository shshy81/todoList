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
    methods: {
        // toggleCheckbox(value) {
        //     this.$emit('toggle-checkbox', value);
        // },
        // deleteTodo(value) {
        //     this.$emit('click-delete', value);
        // }
    }
}
</script>

<style>

</style>
