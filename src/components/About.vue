<template>
  <div class="demo-image">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image style="height: 100px" :src="@/assets/img/IndigPeoplesDay2018-1.jpg" :fit="fit"></el-image>
    </div>
  </div>
</template>
script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
      }
    }
  }
</script>
