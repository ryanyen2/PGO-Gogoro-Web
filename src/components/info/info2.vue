<template>
  <section id="two" class="wrapper">
    <div class="box">
      <div class="box-group">
        <h2>預約到店換輪胎!!</h2>
        <img width="100%" src="../../assets/S__10493955.jpg" alt="image.alt" />
        <img width="100%" src="../../assets/S__10493957.jpg" alt="image.alt" />
        <img width="100%" src="../../assets/S__10493958.jpg" alt="image.alt" />
        <img width="100%" src="../../assets/S__10493959.jpg" alt="image.alt" />
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
  background-image: url("../../assets/motor-2.jpg");
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
  width: 50%;
  margin: auto;
}
.box-group {
  background-color: #17a2b8;
  padding: 2em 0 1em 1em;
  color: white;
  border-radius: 1em;
}
.box-group h2 {
  margin-bottom: 1em;
}
.box-group img {
  height: auto;
  margin: 0 1em 1em 1em;
  width: 44%;
  background-color: rgba($color: white, $alpha: 0.9);
  display: inline-block;
}
</style>
