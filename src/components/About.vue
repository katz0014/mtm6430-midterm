<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <div class="about-container">
      <img src="@/assets/img/IndigPeoplesDay2018-1.jpg" alt />
      <p>{{ para1 }}</p>
    </div>
    <div class="about-container"></div>
    <p>{{ para2 }}</p>
    <img src="@/assets/img/IndigPeoplesDay2018-5.jpg" class="img-2" alt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "About the Vue App",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum arcu elit, sit amet pulvinar augue mattis vitae. Nullam quis dapibus metus. Fusce suscipit congue augue maximus sollicitudin. Sed a ipsum mi. Donec dignissim molestie ligula, sed tristique sem cursus eget. Etiam a tempor risus. Duis quis nibh elit. Mauris lacus quam, pretium quis ultricies condimentum, molestie id sapien. Proin metus massa, egestas eget leo in, suscipit faucibus erat. Nulla iaculis eros quam, at consectetur lacus faucibus id. Ut id malesuada ipsum, in vestibulum elit.",
      para2:
        "Proin egestas lobortis ante a euismod. Nam et diam tempor, blandit magna vel, malesuada ante. Vestibulum mollis, lacus a pretium pellentesque, dui orci posuere enim, at maximus sapien magna vitae ipsum. Nulla in magna ligula. Etiam blandit viverra mattis. Sed feugiat sem ac ullamcorper ornare. Donec eu bibendum ipsum. In faucibus velit in ante sagittis cursus. Donec viverra quam vel dui eleifend varius."
    };
  }
};
</script>
<style lang="scss">
.about {
  max-width: 800px;
  text-align: left;
}
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-container img {
  width: 50%;
}

.img-2 {
  width: 50%;
  margin: 20px;
}

.about-container * {
  margin: 20px;
}
</style>
