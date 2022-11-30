<template>
  <div>
    <hr>
    <div>
        <input type="text" v-if="flag" @blur="btnShow" ref="iptRef">
        <button v-else @click="inputShow">展示输入框</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag: false
        }
    },
    methods: {
        inputShow(){
            this.flag = true
            // this.$refs.iptRef  此时页面数据更新，页面DOM还没有重新渲染完成
            // 内置方法，在页面DOM重新渲染之后才执行回调函数
            this.$nextTick(() => {
                this.$refs.iptRef.focus();
            })
        },
        btnShow(){
            this.flag = false
        }
    }
}
</script>

<style>

</style>