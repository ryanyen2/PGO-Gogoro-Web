<template>
  <div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <b-modal ref="my-modal" hide-footer title="最新消息!!">
        <div class="d-block text-center">
          <h4>輪胎更換不僅限電動車!!</h4> 
          <h4>油車也可以做預約更換喔</h4>
        </div>
        <hr />
        <div class="d-block text-center">
          <h5>推薦你的好友來換輪胎~可以累積100點折價卷</h5> 
          <h5>加入Line官方帳號也可以拿9折會員卷喔!!</h5>
        </div>
      </b-modal>
    </main>

    <footer class="navbar-default navbar-bottom navbar-dark bg-dark">
      <div class="container-fluid">
        <p class="text-center nav-bar mb-0">
          All rights reserved to
          <a href="">
            @ryanyen2
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
  mounted() {
    this.showModal();
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  created() {},
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
.left-container {
  overflow: hidden;
  position: relative;
  height: 100vh;
  display: inline-block;
  width: 82vw;
}
.right-container {
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index: 2;
}
.scheduler-messages {
  list-style-type: none;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}
.scheduler-messages > .scheduler-message {
  background-color: #f4f4f4;
  box-shadow: inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}

#reset-store-panel {
  position: fixed;
  bottom: 0px;
  right: 0px;
}

body,
.sticky-footer-wrapper {
  min-height: 100vh;
}

.flex-fill {
  flex: 1 1 auto;
}
footer {
  height: 40px;
  color: #666;
  padding: 10px 0 10px 0;
  font-size: 85%;
}
footer a {
  color: #999;
}
footer a:hover {
  color: #efefef;
}
@media (max-width: 576px) {
  footer {
    height: 50px;
  }
}
</style>
