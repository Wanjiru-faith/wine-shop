<template>
  <div id="app">
    <app-header></app-header>
    <section></section>
    <router-view/>
    <app-footer></app-footer> 
  </div>
</template>

<script>
// var section = require('./components/section.vue');
import footer from './components/footer.vue'
import header from './components/header.vue'
export default {
  name: 'App',
  components: {
    'app-footer':footer,
    'app-header':header,
    // 'section':section
  }
}
</script>

<style>


</style>
