<template>
  <div class="hello">
    <h1>deuxiemme compo</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- le ccs ecrit dans c'est balise style reste sur ce components-->
<style scoped>
h1{
  background-color: #42b983;
}
</style>
