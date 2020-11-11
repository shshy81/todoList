<template>
  <div>
      User List
      <div v-for="user in users" :key="user.id">
          {{ user.name }}
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getUsers();
    },
    // mapState, mapGetters는 computed에 위치
    computed: {
        //...mapState({people: 'users'}) 
        // state의 이름을 바꾸고 싶을때 변수명을 설정해서 쓸수있다. 
        //for문의 users대신 people로 변경

        ...mapState([
            // 'todos',
            'users'
        ]),
        // 아래 두개의 state를 가져올때 mapState를 쓰면 쉽게 가져올수 있다.
        // users() {
        //     return this.$store.state.users;
        // },
        // todos() {
        //     return this.$store.state.todos;
        // }
    },
    // mapActions, mapMutations는 methods에 위치
    methods: {
        ...mapActions([
            'getUsers'
        ]),
        // getUsers() {
        //     this.$store.dispatch('getUsers');
        // }
    }
}
</script>

<style>

</style>