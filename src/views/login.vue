<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-input type="text" v-model="userInfo.username" placeholder="用户名"></el-input>
            </el-col>
            <el-col :span="12" :offset="6">
                <el-input type="password" v-model="userInfo.password" placeholder="密码"></el-input>
            </el-col>
            <el-col :span="12" :offset="6">
                <el-button @click="handleLogin" type="primary" plain>Login</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                userInfo: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            handleLogin() {
                this.login(this.userInfo);
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style>
    .el-col {
        margin-bottom: 20px;
        text-align: center;
    }
</style>