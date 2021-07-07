
<template>
  <div id="app">
    <div id="nav">      
      <router-link to="/VehicleEntryForm">Vehicle Entry Form</router-link> |
      <router-link to="/GridOfVehicles">Grid of vehicles</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
 .btn-vue{
    background: #474749;
    color: #1bdf25;
    font-weight: bold;
}
html, body, .container-table{
  height: 100%;
  background-color:  #ccd6eb;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1bdf25;  
}
#nav {
  padding: 30px;


a { font-weight: bold;
    color: #1bdf25;

    &.router-link-exact-active {
      color: #1bdf25;
    }
  }
}
.btn-primary{
    background: #575a58;
    color: #1bdf25;
    font-weight: bold;
}
</style>
