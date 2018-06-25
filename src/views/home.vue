<template>
    <el-container style="height: 100%;">
        <el-header style="background-color:#545c64;">

        </el-header>
        <el-container>
            <el-aside>
                <el-menu :router=true style="height: 100%;" class="el-menu-vertical-demo" background-color="#545c64"
                         text-color="#fff" active-text-color="#ffd04b">
                    <template v-for="menu in menus">
                        <el-submenu :index="menu.path" v-if="menu.subMenus && menu.subMenus.length > 0">
                            <template slot="title">
                                <i :class="menu.icon"></i>
                                <span>{{menu.name}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item :index="subMenu.path" v-for="subMenu in menu.subMenus" :key="subMenu.id">
                                    {{subMenu.name}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item :index="menu.path" v-else>
                            <i :class="menu.icon"></i>
                            <span slot="title">{{menu.name}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        mounted() {
            this.getMenus();
        },
        methods: {
            ...mapActions(['getMenus'])
        },
        computed: {
            ...mapState({
                menus: state => state.auth.menus
            })
        }
    }
</script>

<style>

</style>