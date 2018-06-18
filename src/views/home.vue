<template>
    <div>
        {{userInfo.username}}
        <ul>
            <li v-for="(item,index) in menuItems">{{item.menuName}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        mounted() {
            this.getMenuItems();
        },
        methods: {
            ...mapActions(['getMenuItems'])
        },
        computed: {
            ...mapState({
                userInfo: state => state.auth.userInfo,
                menuItems: state => state.auth.menuItems
            })
        }
    }
</script>

<style>

</style>