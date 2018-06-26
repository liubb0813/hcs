<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input v-model="queryUsername" placeholder="请输入用户名"></el-input>
            </el-col>
            <el-button plain>查询</el-button>
            <el-button @click="editUser()" type="primary" plain>新增</el-button>
            <el-button type="danger" plain>批量删除</el-button>
        </el-row>

        <el-row style="margin-top:25px;">
            <el-table :data="userList" border style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" align="center"></el-table-column>
                <el-table-column prop="username" label="用户名" align="center"></el-table-column>
                <el-table-column prop="tel" label="手机号" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row style="margin-top:25px;">
            <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :current-page="1"
                           :page-size="5" :total="total">
            </el-pagination>
        </el-row>

        <user-edit ref="userEdit" @refreshTable="refreshTable()"></user-edit>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import userEdit from './user-edit.vue';

    export default {
        components: {
            userEdit
        },
        data() {
            return {
                userList:[],
                total:1,
                queryUsername: '',
                curPage: 1
            }
        },
        computed: {

        },
        mounted() {
            this.refreshTable();
        },
        methods: {
            ...mapActions(['getUserList']),
            handleEdit(index, row) {
                this.editUser(row.id);
            },
            handleCurrentChange(val) {
                this.curPage = val;
                this.refreshTable();
            },
            editUser(id) {
                this.$refs.userEdit.editUser(id);
            },
            refreshTable() {
                this.getUserList({offset: (this.curPage - 1) * 5, limit: 5}).then(res => {
                    let data = res.data.data;
                    this.userList = data.userList;
                    this.total = data.total;
                });
            }
        }
    }
</script>

<style>

</style>