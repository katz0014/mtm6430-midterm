<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Contact">Contact</router-link>
    <router-link to="/Testimonials">Testimonials</router-link>
  </div>
</template>
<style lang="scss">
#nav a {
  background-color: gray;
  color: white;
  width: 100%;
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  padding: 30px;
  margin: auto;
  font-family: Century Gothic;
}

#nav a:hover {
  background-color: lightgrey;
  color: black;
}
</style>
