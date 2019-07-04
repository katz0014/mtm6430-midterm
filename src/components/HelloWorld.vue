<template>
  <div>
    <h1>{{ title }}</h1>
    <img />
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to My View App",
      img: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ante ut dui accumsan tincidunt at id urna. Nullam fringilla massa ut venenatis tempus. Cras quam lectus, lacinia eget facilisis et, feugiat ut sapien. Mauris ultricies, magna a maximus euismod, nisl velit eleifend risus, vitae rutrum leo urna quis ex. Aliquam erat volutpat. Phasellus scelerisque ligula ut justo commodo hendrerit. Curabitur odio purus, condimentum tincidunt vulputate vitae, egestas sodales magna. Quisque ligula turpis, finibus a metus in, tincidunt ornare felis."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1 {
  float: left;
  margin-left: 120px;
  color: blue;
  font-size: 3rem;
  width: 50%;
}

#top-image {
  height: 420px;
  float: left;
  margin-top: 20px;
  margin-left: 120px;
}
p {
  float: right;
  width: 50%;
  text-align: left;
}
</style>
