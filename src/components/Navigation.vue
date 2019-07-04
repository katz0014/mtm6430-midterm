<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Contact">Contact</router-link>
    <router-link to="/Testimonials">Testimonials</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
#nav a {
  font-weight: bold;
  padding: 10px;
}
</style>
