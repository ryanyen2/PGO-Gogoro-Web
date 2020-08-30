<template>
  <section id="two" class="wrapper">
    <div class="box">
      <div class="box-group">
        <h2>現在立刻加入Line官方帳號~取得會員好禮!!</h2>
        <b-card class="card">
          <img src="../../assets/24326.jpg" alt="image.alt" />
        </b-card>
        <b-card class="card">
          <img src="../../assets/24357.jpg" alt="image.alt" />
        </b-card>
        <b-card class="card1">
          <img
            src="https://qr-official.line.me/sid/M/403pkicw.png"
            alt="image.alt"
          />
          <b-card-text>
            <a href="https://lin.ee/m5m4l1w"
            ><img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="加入好友"
              height="36"
          /></a>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.wrapper {
  padding: 2em;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../../assets/motor-1.jpg");
  border-top: 0;
  height: auto;
  text-align: center;
  overflow: hidden;
}

.box {
  min-width: 100%;
  max-height: auto;
  height: auto;
  background-color: rgba($color: white, $alpha: 0);
  display: block;
  overflow: hidden;
}
.box-group {
  background-color: #17a2b8;
  padding: 2em 0 1em 0em;
  color: white;
  border-radius: 1em;
}
.box-group h2 {
  margin-bottom: 1em;
}
.box-group img {
  height: auto;
  width: 15em;
}
.card {
  background-color: #17a2b8;
  border: 0;
  display: inline-block;
}
</style>
