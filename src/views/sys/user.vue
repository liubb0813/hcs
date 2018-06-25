<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input v-model="queryUsername" placeholder="请输入用户名"></el-input>
            </el-col>
            <el-button plain>查询</el-button>
            <el-button type="primary" plain>新增</el-button>
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
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                queryUsername: ''
            }
        },
        computed: {
            ...mapState({
                userList: state => state.sysUser.userList,
                total: state => state.sysUser.total
            })
        },
        mounted() {
            this.getUserList({offset: 0, limit: 5});
        },
        methods: {
            ...mapActions(['getUserList']),
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleCurrentChange(val) {
                this.getUserList({offset: (val - 1) * 5, limit: 5});
            }
        }
    }
</script>

<style>

</style>