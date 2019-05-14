<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container">
      <Contador/>
    </div>
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue'

export default {
  name: 'app',
  components: {
    Contador
  }
}
</script>