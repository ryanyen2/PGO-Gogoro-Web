<template>
  <b-navbar toggleable="lg" type="dark" variant="info" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <img
      src="https://eq.pgo.com.tw/wp-content/uploads/app-b-icon-1.png"
      alt=""
    />
    <router-link to="/" class="navbar-brand mr-auto">
      <h2>PGO 電動車汐止康寧店</h2>
      <p v-if="user != null">Hello ~ {{ user.displayName }}</p>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav-collapse" style="margin-right:3em;">
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="">
          <router-link to="/reservation" exact>
            <b-button size="deafult" variant="info"> 預約維修</b-button>
          </router-link>
        </b-nav-item>
        <b-nav-item class="">
          <router-link to="/shop" exact>
            <b-button size="deafult" variant="info"> 好康好物</b-button>
          </router-link>
        </b-nav-item>

        <b-nav-item-dropdown class="m-2">
          <template v-slot:button-content>
            <em>登入</em>
          </template>
          <b-dropdown-item v-if="user == null">
            <router-link to="/login">登入</router-link>
          </b-dropdown-item>
          <b-dropdown-item v-if="user != null">
            <router-link to="/admin">管理員畫面</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/logout">登出 </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" variant="dark" class="mr-2 my-sm-0" type="submit"
            >搜尋</b-button
          >
        </b-nav-form>
        <b-nav-item class="">
          <b-button
            size="sm"
            variant="dark"
            class="mr-2 mt-1"
            v-b-toggle.sidebar-variant
            >聯絡我們</b-button
          >
          <b-sidebar
            id="sidebar-variant"
            title="聯絡資訊"
            bg-variant="dark"
            width="400px"
            text-variant="light"
            backdrop-variant="dark"
            backdrop
            class="p-3"
            shadow
            right
          >
            <div class="px-3 py-2 sidepage">
              <h6>電話：</h6>
              <a href="tel:+886 2 8693 3355">+886 2 8693 3355</a>
              <h6>地址:</h6>
              <a href="https://goo.gl/maps/RueySLuDmafavkt28">221台灣新北市汐止區康寧街377號</a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.002288674931!2d121.62698232353577!3d25.06791156406247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd49acf71cf9bc00!2zUEdPIOmbu-WLlei7ii3msZDmraLlurflr6flupc!5e0!3m2!1szh-TW!2shk!4v1598868083544!5m2!1szh-TW!2shk"
                width="400"
                height="250"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
              <h6>營業時間:</h6>
              <ul>
                <li>星期一 10:00–20:00</li>
                <li>星期二 10:00–20:00</li>
                <li>星期三 10:00–20:00</li>
                <li>星期四 10:00–20:00</li>
                <li>星期五 10:00–20:00</li>
                <li>星期六 10:00–20:00</li>
                <li>星期日 休館</li>
              </ul>
            </div>
          </b-sidebar>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      isNavOpen: false,
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped lange="sass">
.link {
  color: azure;
}
.sidepage {
  line-height: 2em;
  cursor: default;
  font-size: 20;
  text-decoration: none;
}
</style>
