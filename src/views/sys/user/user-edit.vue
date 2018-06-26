<template>
    <el-dialog title="新增" :visible.sync="visible">
        <el-form :model="user" label-width="100px">
            <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" v-model="user.confirmPwd"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="user.tel"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button @click="submit" type="primary">确定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                visible: false,
                user: {}
            }
        },
        methods: {
            ...mapActions(['findUserById']),
            editUser(id) {
                if (id) {
                    this.findUserById(id).then((res) => {
                        this.user = res.data.data;
                    })
                } else {
                    this.user = {};
                }
                this.visible = true;
            },
            submit() {
                this.$emit('refreshTable');
                this.visible = false;
            }
        }
    }
</script>

<style>

</style>