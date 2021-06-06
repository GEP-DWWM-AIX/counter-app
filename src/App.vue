<template>
  <div>
    Ici, on va mettre des compteurs
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
  </div>  
</template>

<script>
import counter from './components/Counter'
export default {
  name: 'App',
  components: {
    counter
  }

}
</script>

<style>

</style>