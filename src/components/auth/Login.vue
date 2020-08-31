<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>登入</h3>

            <div class="form-group">
                <label>郵件地址</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>密碼</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">登入</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">忘記密碼?</router-link>
            </p>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/admin')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>