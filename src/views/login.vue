<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-input type="text" v-model="loginUser.username" placeholder="用户名"></el-input>
            </el-col>
            <el-col :span="12" :offset="6">
                <el-input type="password" v-model="loginUser.password" placeholder="密码"></el-input>
            </el-col>
            <el-col :span="12" :offset="6">
                <el-button @click="handleLogin" type="primary" plain>Login</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex';

    export default {
        data() {
            return {
                loginUser: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            ...mapMutations(['SET_LOGIN_USER']),
            handleLogin() {
                this.login(this.loginUser).then(res => {
                    if (res.data.code == 200) {
                        this.SET_LOGIN_USER(res.data.data);
                        this.$router.push({path: '/'});
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
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