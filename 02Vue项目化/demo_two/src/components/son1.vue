<template>
  <div class="son1">
    <p>{{msg}}</p>
    <p>{{user}}</p>
    <button @click="send">发送</button>
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
    props: ['msg', 'user'],
    data() {
      return {
        str: `解放军四十六路`
      }
    },
    methods: {
      send(){
        bus.$emit('share', this.str);
      }
    }
}
</script>

<style>

</style>