<template>
  <div>
    <h2 class="address">{{ addhead }}</h2>
    <p>{{ address }}</p>
    <h2 class="hours">{{ hourshead }}</h2>
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
        Monday: "8AM - 6PM",
        Tuesday: "8AM - 6PM",
        Wednesday: "8AM - 6PM",
        Thursday: "8AM - 6PM", 
        Friday: ""
      }
      address: "1435 Woodroffe Avenue, Ottawa, Ontario. K2G 1V8, 613-7274723",
      addhead: "Address", 
      hourshead: "Hours of Operation"
    };
  }
};
</script>

<style lang="scss">
ul li {
  list-style: none;
}
</style>
