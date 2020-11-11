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
        // ...mapState({
        //     users: state => state.user.users
        // }),
        
        // ...mapState('user', {
        //     users: state => state.users
        // }),
        ...mapState('user', ['users'])
    },
    // mapActions, mapMutations는 methods에 위치
    methods: {
        ...mapActions('user', ['getUsers']),
    }
}
</script>

<style>

</style>