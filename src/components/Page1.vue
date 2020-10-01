<template>
    <div>
        <h1>Bienvue a la page 1 Les article de blog</h1>
        <hr>
        <ul>
            <li v-for="(article,index) in allArticles" v-bind:key="index">
                <router-link v-bind:to="`/blogpost/${index + 1}`">
                    <div class="card m-2">
                        <h3>{{article.title}}</h3>
                    </div>
                </router-link>  
            </li>
        </ul>

    </div>
</template>
<script>
import Axios from 'axios'
export default {
    name:'Page1',
    data(){
        return{
            allArticles: []
        }
    },
    created(){
        Axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => {
            console.log(reponse)
            for(const blogpost of reponse.data){
                this.allArticles.push(blogpost)
            }
        })
    }
}
</script>
<style scoped>

</style>