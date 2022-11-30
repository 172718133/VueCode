<template>
  <div>
    <h1>APP根组件</h1>
    <div>{{newCount}}</div>
    <son1 :msg="message" :user="user"></son1>
    <son2 @numChange="getNewCount"></son2>
    <ref></ref>
  </div>
</template>

<script>
import son1 from '@/components/son1.vue'
import son2 from '@/components/son2.vue'
import ref from '@/components/ref.vue'
export default {
  data() {
    return {
      message: 'hello',
      user: { name: 'zs', age: 18},
      newCount: 0
    }
  },
  methods: {
    getNewCount(val){
      this.newCount = val;
    }
  },
  components: {
    son1,
    son2,
    ref
  }
}
</script>

<style>
  .son1{
    background-color: antiquewhite;
    padding: 20px;
    margin: 20px;
  }
  .son2{
    background-color: beige;
    padding: 20px;
    margin: 20px;
  }
</style>