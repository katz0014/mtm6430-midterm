<template>
  <div>
    <ul>
      <li v-for="(value, key) in hours">{{ key }}: {{ value }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      hours: {
        Monday: "8 AM - 10 PM",
        Tuesday: "8 AM - 10 PM", 
        Wednesday: "8 AM" - 10 PM"
      }
    };
  }
};
</script>

<style lang="scss">
ul li {
  list-style: none;
}
</style>
