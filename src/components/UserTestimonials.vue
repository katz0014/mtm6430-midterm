<template>
  <div>
    <button @click="loadInfo">Load Testimonials in console</button>

    <li v-for="(item, index) in testimonials">{{}}</li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: null
    };
  },
  methods: {
    loadInfo() {}
  }
};
</script>
