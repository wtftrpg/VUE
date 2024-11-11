<script setup></script>

<template>
  <div>
    <h1>mamol株式会社</h1>
  
<!-- New titles in a flex container -->
<div style="display: flex; justify-content: space-around; margin-top: 20px;">
  <div>
    <router-link to="/login">登録画面</router-link>
  </div>
  <div>企業情報</div>
  <div>業務実績</div>
  <div>採用活動</div>
</div>

<router-view></router-view>
</div>
</template>

