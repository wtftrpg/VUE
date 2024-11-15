<template>
    <div>
        <h1>登録成功</h1>
        <table v-if="users.length > 0">
            <thead>
                <tr>
                    <th>userID</th>
                    <th>username</th>
                    <th>password</th>
                    <th>mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.userId }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.mobile }}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
import axios from 'axios'; // Import axios

export default {
    data() {
        return {
            users: [] 
        };
    },
    mounted() {
        this.fetchUserData(); 
    },
    methods: {
        fetchUserData() {
            
            axios.get("http://192.168.1.17:8080/test/user/list")
                .then((response) => {
                    console.log("获得数据", response.data.data);

                    
                    this.users = response.data.data; 
                })
                .catch((error) => {
                    console.error('无法获得数据', error);
                    this.message = "无法获得数据"; 
                });
        }
    }
}
</script>
