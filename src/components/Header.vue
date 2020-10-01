<template>
    <div>
        <ul class="nav">
            <router-link to="/" exact><li class="btn btn-primary btn-nav">accueil</li></router-link>
            <li class="btn btn-primary btn-nav"><router-link to="/page1">page1</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page2">page2</router-link></li>
        </ul>
        <!--<h1>header top</h1>-->
    </div>
</template>
<script>
export default {
    name:'Headers',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .router-link-active{
        color: red;
    }
    .btn-nav{
        margin: 5px;
    }
    .btn-nav a{
        color: white;
        text-decoration: none;
    }
</style>