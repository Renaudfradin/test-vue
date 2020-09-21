<template>
    <div>
        <h1>{{hello}}</h1>
        <listeobj v-bind:myArr="myArr"/>
    </div>
</template>
<script>
import listeobj from './Liste/Liste.vue';
export default {
    name:'contenu',
    components:{
        listeobj
    },
    data:function() {
        return{
            hello:"bonjour le monde",
            prenom:"j.l fradin",
            myArr : [
                {titre:"Iception",date:2010,img:'./assets/logo.png'},
                {titre:"Transformer",date:2008},
                {titre:"Tennet",date:2020},
                {titre:"Transformer3",date:2014},
            ]
        }
    }
}
</script>
<style scoped>

</style>