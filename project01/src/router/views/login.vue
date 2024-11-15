<template>
    <head>
        <title>ログイン画面</title>
    </head>
    <div>
        <h1>登録画面</h1>
        <div>
            <label for="name">名前</label>
            <el-input class="input" type="text" id="name" v-model="name" ></el-input>
        </div>
  
        <div>
            <label for="password">パスワード</label>
            <el-input type="password" id="password" v-model="password"></el-input>
            
        </div>
  
        <el-row v-if="isSwitchOn">
          <label for="verify">認証コード</label>
          <el-input type="password" id="verify" v-model="verify"></el-input>
        </el-row>
  
        <el-row class="switch-container">
          <label for="switch">开关</label>
          <input type="checkbox" id="switch" v-model="isSwitchOn">
          <label class="switch-label" for="switch"></label>
          <!-- <span>{{ isSwitchOn ? '开' : '关' }}</span> -->
        </el-row>
  
        <el-button type="success" plain round @click="login">登录</el-button>
    </div>

    <p>{{ message }}</p>
  </template>
  

<script>
import axios from 'axios';
import { ElButton, ElInput } from 'element-plus';

export default {
  components: {
    ElButton,
    ElInput,
  },
  data() {
      return {
          name: '',
          password: '',
          message: '',
          isSwitchOn: false,
      };
  },
  methods: {
      login() {
          const userData = {
              "username": this.name,
              "password": this.password,
          };

          // Attempt to log in
          axios.post("http://192.168.1.17:8080/login", userData)
              .then((response) => {
                  console.log(response.data);
                  console.log("成功！");
                  this.$router.push('/login_success');
              })
              .catch((error) => {
                  console.error(error);
                  this.message = "失败。请重试。"; // Display an error message
              });
      }  
  }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Left align the items */
    justify-content: center;
    height: 100vh; /* Full viewport height to center vertically */
    padding: 0 20px; /* Optional padding for better visual spacing */
}

.switch-container {
    display: flex;
    align-items: center;
}

.switch-container label {
    margin-right: 8px;
}

input[type="checkbox"] {
    display: none; /* Hide the default checkbox */
}

.switch-label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.switch-label::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
}

input[type="checkbox"]:checked + .switch-label {
    background-color: #4caf50;
}

input[type="checkbox"]:checked + .switch-label::before {
    transform: translateX(20px);
}

input {
    margin-bottom: 12px; /* Add spacing between input fields */
}
</style>
