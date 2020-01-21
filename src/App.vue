<template>
  <div id="app">

    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <span id="titulo">Agenda</span>
        </section>
        <section class="navbar-section">
          <a href="" class="btn btn-link">Instagram</a>
          <a href="" class="btn btn-link">GitHub</a>
        </section>
      </header>
    </div>




      <router-view></router-view>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

#titulo{
    font-family: 'Lobster', cursive;
    font-size: 25px;
}

</style>
