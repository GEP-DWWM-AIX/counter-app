<template>
  <div>
      <button @click="increment">Incremente</button> {{ getCounter }}
  </div>
</template>

<script>
export default {
    methods: {
        increment: function(){
            this.$store.dispatch('setCounter')
        }
    },
    computed:{
        getCounter: function(){
            return this.$store.getters.getCounterFromStore
        }
    }
}
</script>

<style>

</style>