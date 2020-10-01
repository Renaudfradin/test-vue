<template>
    <div>
        <h1>Bienvue a la page 2</h1>
        <div v-on:click="godebut" class="btn btn-warning">retour deebut</div>
    </div>
</template>
<script>
export default {
    name:'Page2',
    data(){
        return{

        }
    },
    methods:{ //$ donner qui vient de vue ou de l'ecosisteme de vue
        godebut:function(){
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>

</style>