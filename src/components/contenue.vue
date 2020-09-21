<template>
    <div>
        <h1>{{hello}}</h1>
        <listeobj/>
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
        }
    }
}
</script>
<style scoped>

</style>