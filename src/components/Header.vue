<template>
  <header>
    <Logo />
    <div class="account">
      <router-link
        to="login" 
        class="btn btn-success btn-sm"
        v-if="$store.state.userId===''">로그인하기</router-link>
      <router-link 
        to="logout"
        class="btn btn-danger btn-sm" 
        @click="handleLogOut"
        v-if="$store.state.userId!==''">로그아웃</router-link>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo"
export default {
  components: {
    Logo
  },
  methods:{
    handleLogOut(){
      this.$store.dispatch('deleteAuth');
      this.$router.push("/login");
    }
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'About',
          href: '/about'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
  header {
    position: fixed;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(16px);
    .logo {
      position: absolute;
      left: 40px;
      font-weight: 700;
      margin-right: 40px;

    }
    .nav {
      position: relative;
    }
    .account {
      position: absolute;
      right: 40px;
      .btn {
        background-color: #fff;
        color: $gray-500;
        border: 1px solid $gray-500;
        border-radius: 12px;
        transition: .3s;
        padding: 8px 16px;
        &:hover {
          background-color: #222;
          color: $white;
        }
      }
    }
  }
</style>