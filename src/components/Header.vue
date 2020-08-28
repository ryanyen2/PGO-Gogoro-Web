<template>
<b-navbar toggleable="lg" type="dark" variant="info" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <img src="https://eq.pgo.com.tw/wp-content/uploads/app-b-icon-1.png" alt="">
    <router-link to="/" class="navbar-brand mr-auto"> <h2>PGO 電動車汐止店</h2>
    <p v-if="user!=null">Hello ~ {{user.displayName}}</p>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav-collapse" style="margin-right:3em;">
      <b-navbar-nav class="ml-auto">
        <b-nav-item class=''>
          <router-link to='/reservation' exact>
            <b-button size='deafult' variant="info"> 預約維修</b-button>
          </router-link>
        </b-nav-item>
        <b-nav-item class=''>
          <router-link to='/shop' exact>
            <b-button size='deafult' variant="info"> 好康好物</b-button>
          </router-link>
        </b-nav-item>

        <b-nav-item-dropdown class='m-2'>
          <template v-slot:button-content >
              <em>登入</em>
          </template>
          <b-dropdown-item>
            <router-link to="/login">登入</router-link>
          </b-dropdown-item>
          <b-dropdown-item >
            <router-link to='/logout'>登出 </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" variant='dark' class="mr-2 my-sm-0" type="submit">搜尋</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      isNavOpen: false,
      user: null
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
}
</script>


<style scoped lange="sass">
.link{
  color:azure;
}
</style>
