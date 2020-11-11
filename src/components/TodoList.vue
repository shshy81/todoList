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
            // return this.$store.state.todos;
            // module로 쓰려면 모듈을 추가해둬야함.
            return this.$store.state.todo.todos;
        }
    },
}
</script>

<style>

</style>
