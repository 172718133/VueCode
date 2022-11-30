<template>
  <div class="son2">
    <div>{{count}}</div>
    <button @click="add">+1</button>
    <div>{{strFromSon}}</div>
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
    data() {
        return {
            count: 0,
            strFromSon: ''
        }
    },
    created(){
        bus.$on('share', (val)=>{
            this.strFromSon = val;
        });
    },
    methods: {
        add(){
            this.count += 1;
            this.$emit('numChange',this.count);
        }
    }
}
</script>

<style>

</style>