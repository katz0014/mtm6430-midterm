<template>
  <div class="container-home">
     <div class="homepara">
    <h1>{{ title }}</h1>
      <img src="@/assets/img/IndigPeoplesDay2018-3.jpg" class="img"/>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to My View App",
      img: "@/assets/img/IndigPeoplesDay2018-1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ante ut dui accumsan tincidunt at id urna. Nullam fringilla massa ut venenatis tempus. Cras quam lectus, lacinia eget facilisis et, feugiat ut sapien. Mauris ultricies, magna a maximus euismod, nisl velit eleifend risus, vitae rutrum leo urna quis ex. Aliquam erat volutpat. Phasellus scelerisque ligula ut justo commodo hendrerit. Curabitur odio purus, condimentum tincidunt vulputate vitae, egestas sodales magna. Quisque ligula turpis, finibus a metus in, tincidunt ornare felis."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container-home {
  display: flex;
  max-width: 1200px;
  text-align: left;
  margin: auto;
}
h1 {
  font-size: 3rem;
  padding-top: 20px;
  color: purple;
  text-shadow: 3px 3px 10px #555; 
  width: 80%;
}

.homepara img {
  width: 50%;
  float: left;
  padding-right: 10px; 
}
.homepara {
  margin: 10 px;
  text-align: left;
}
</style>
