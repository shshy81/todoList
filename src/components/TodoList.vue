<template>
    <div>
        <Todo 
            v-for="todo in propTodos" :key="todo.id"
            :propTodos = "todo"
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
        propTodos: {
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
