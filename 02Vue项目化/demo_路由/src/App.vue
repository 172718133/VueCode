<template>
    <div class="app">
        <h1>APP组件</h1>
        <!-- <a href="#/left">left</a><br>
        <a href="#/right">right</a> -->
        <router-link to='/left'>left</router-link>
        <router-link to='/movie/1'>电影1</router-link>
        <router-link to='/movie/2'>电影2</router-link>
        <router-link to='/movie/3'>电影3</router-link>
        <router-link to='/right'>right</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
    data() {
        return {
            
        }
    },
    components: {
        Left,
        Right,
    },
};
</script>

<style lang="less" scoped>
    a{
        margin: 0 20px 20px 10px;
    }
</style>