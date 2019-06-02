<template>
  <div id="app">
    <div id="nav" class="pj">
      <ul>
      <router-link to="/">abb</router-link> 
      <router-link to="/chat">chat</router-link>
      <router-link to="/ahh">ahh</router-link>
       <ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: red;
  height: 100px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.pj{
   display: flex;
   justify-content:space-between
}
</style>
