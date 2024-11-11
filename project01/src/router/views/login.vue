<template>
    <div>
      <h1>登録画面</h1>
      <form>
        <label for="name">名前</label>
        <input type="text" id="name" v-model="name">
     
      </form>
      <p>{{ message }}</p>
      <form>
        <label for="name">パスワード</label>
        <input type="password" id="password" v-model="password">
        
      </form>
      <button type="button" @click="login">ログイン</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            name: '',
            password: '',
            message: ''
        }
    },
    methods: {
        login() {
            if (this.name === 'mamol' && this.password === 'mamol') {
                this.$router.push('/login_success');
            } else {
                this.message = 'ログイン失敗';
            }
          } 
    }  
} 
</script>