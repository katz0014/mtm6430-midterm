<template>
  <div class="container">
    <h1>Contact</h1>
    <div class="contact-container">
      <div>
        <h2 class="address">Address</h2>
        <p class="p-add">
          {{ street }}
          <br />
          {{ city }}
          <br />
          {{ phone }}
        </p>
      </div>
    </div>
    <h2 class="hours">{{ hourshead }}</h2>
    <div class="hoursOp">
      <ul>
        <li v-for="open in hoursop">{{ open.day }}: {{ open.hours }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      street: "1435 Woodroffe Avenue",
      city: "Ottawa, Ontario K2G 1V8",
      phone: "613-7274723",
      hourshead: "Hours of Operation",
      addhead: "Address",
      hoursop: [
        { day: "Monday", hours: "8AM - 6PM" },
        { day: "Tuesday", hours: "8AM - 6PM" },
        { day: "Wednesday", hours: "8AM - 6PM" },
        { day: "Thursday", hours: "8AM - 6PM" },
        { day: "Friday", hours: "8AM - 5PM" },
        { day: "Saturday", hours: "10AM - 4 PM" },
        { day: "Sunday", hours: "10AM - 2PM" }
      ]
    };
  }
};
</script>

<style lang="scss">
.contact-container {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  float: left;
}
.hoursOp {
  display: flex;
}
ul li {
  list-style: none;
}
.container {
  width: 80%;
  margin: auto;
  text-align: left;
}

.hours {
  padding-top: 20px;
}
</style>
