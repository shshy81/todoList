<template>
    <div>
        <input 
            type= "text" class = "w-100 p-2" placeholder = "add Here"
            @keyup.enter="addTodo"
            v-model="todoText"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            // this.$emit('add-todo', e.target.value);
            this.$store.commit('ADD_TODO', e.target.value);
            this.todoText = '';
        }
    }
}
</script>

<style>

</style>