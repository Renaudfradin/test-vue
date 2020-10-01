<template>
    <div>
        <h1>voicie le post{{ id }}</h1>
        <h1> {{ articleUnique.title }}</h1>
        <br>
        <p> {{ articleUnique.body }}</p>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    name:"Post",
    data(){
        return{
            id:this.$route.params.id,
            articleUnique: []
        }
    },
    mounted(){
        Axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(reponse => {
            this.articleUnique = reponse.data
        })
    }

}
</script>
<style scoped>

</style>