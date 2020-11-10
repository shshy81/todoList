<template>
    <div>
        <Todo 
            v-for="todo in todos" :key="todo.id"
            :todos = "todo"
            @toggle-checkbox = "toggleCheckbox"
            @click-delete = "deleteTodo"
            />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value);
        },
        deleteTodo(value) {
            this.$emit('click-delete', value);
        }
    }
}
</script>

<style>

</style>
