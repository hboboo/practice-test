<template>
  <div>
    <item-container father-component="home"></item-container>
  </div>
</template>

<script>
import itemContainer from '../components/itemContainer.vue'

export default {
  name: 'Home',
  components: {
    itemContainer
  }
};
</script>

<style lang="less">

</style>